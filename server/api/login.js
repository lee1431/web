export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const config = useRuntimeConfig();

    if (body.username === config.ADMIN_NAME && body.password === config.ADMIN_PASS) {
        return { success: true, message: '로그인 성공' };
    } else {
        return { success: false, message: '아이디 또는 비밀번호가 잘못되었습니다.' };
    }
});
