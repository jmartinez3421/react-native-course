export const getLimitAndOffset = (url: string): { limit: number; offset: number } => {
    const offset = url.match(/offset=(\d+)/);
    const limit = url.match(/limit=(\d+)/);
    return {
        limit: limit ? Number(limit[1]) : 20,
        offset: offset ? Number(offset[1]) : 0,
    };
};
