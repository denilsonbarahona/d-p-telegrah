export default (status, resolved)=>{
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
            ok: status,
            status: status,
            json: () => Promise.resolve(resolved),
        });
    });
};