export const login = async () =>
    await new Promise(resolve => {
        setTimeout(() => {
            resolve({
                firstname: "John",
                lastname: "Doe"
            });
        }, 1500);
    });