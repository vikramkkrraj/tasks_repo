export const transactionLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const action = req.method === 'POST' && req.originalUrl.includes('borrow') ? 'borrowed' : 'returned';
    const readerName = req.body.readerName || req.params.readerName;
    console.log(`[${timestamp}] ${readerName} ${action} book with ID ${req.params.id}`);
    next();
};
