import { ref } from 'vue';

export function useNotices() {
    const notices = ref([]);
    const sha = ref('');

    async function fetchNotices() {
        try {
            const response = await $fetch('/api/notices');
            if (response.notices) {
                notices.value = response.notices;
                sha.value = response.sha;
                console.log('receive sha : ' + sha.value);
            }
        } catch (error) {
            console.error('Failed to fetch notices:', error);
        }
    }

    async function addNotice(newNotice) {
        if (!sha.value) {
            alert('기존 공지사항 데이터를 가져오는 데 실패했습니다.');
            return;
        }

        const newItem = {
            ...newNotice,
            date: new Date().toISOString().split('T')[0],
            uid: crypto.randomUUID(),
        };

        try {
            const response = await $fetch('/api/notices', {
                method: 'POST',
                body: { notices: [...notices.value, newItem], sha: sha.value },
            });

            if (response.success) {
                alert('공지사항이 성공적으로 추가되었습니다.');
                await fetchNotices(); // 업데이트된 목록 다시 가져오기
            } else {
                console.error('공지사항 업데이트 실패:', response.error);
            }
        } catch (error) {
            console.error('공지사항 추가 중 오류 발생:', error);
        }
    }

    return {
        notices,
        sha,
        fetchNotices,
        addNotice,
    };
}
