/**
 * This file will have the logic to  mock request and response
 */

/**
 * Mocked Req
 */

module.exports = {

    mockRequest : () =>{
        const req = {};
        /**
         * body
         * params
         * query
         */
        req.body = jest.fn().mockReturnValue(req); // mock the req body field
        req.params = jest.fn().mockReturnValue(req);
        req.query = jest.fn().mockReturnValue(req);
        return req;
    },

    /**
    * Mocked Res
    */

    mockResponse : () => {
        const res = {};
        /**
         * status
         * send
         */
        res.status = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        return res;
    }
}





