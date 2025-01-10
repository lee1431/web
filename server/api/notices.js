// server/api/notices.js
import { defineEventHandler, readBody } from 'h3';
import fetch from 'node-fetch';


export default defineEventHandler(async (event) => {
    const GITHUB_REPO = process.env.GITHUB_REPO;
    const GITHUB_FILE_PATH = process.env.GITHUB_FILE_PATH;
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const { method } = event.req;

    if (method === 'GET') {
        // 공지사항 가져오기
        try {
            const response = await fetch(GITHUB_API_URL, {
                headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch notices: ${response.statusText}`);
            }

            const data = await response.json();
            const decodedContent = Buffer.from(data.content, 'base64').toString('utf8');
            console.log('sha 1 : ' + data.sha);
            return { notices: JSON.parse(decodedContent), sha: data.sha };
        } catch (error) {
            return { error: error.message };
        }
    } else if (method === 'POST') {
        // 공지사항 업데이트
        try {
            const body = await readBody(event);
            let { notices, sha } = body;

            const updateData = {
                message: '공지사항 업데이트',
                content: Buffer.from(JSON.stringify(notices, null, 2)).toString('base64'),
                sha,
            };

            const response = await fetch(GITHUB_API_URL, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });

            if (!response.ok) {
                throw new Error(`Failed to update notices: ${response.statusText}`);
            }

            return { success: true };
        } catch (error) {
            return { error: error.message };
        }
    }
});
