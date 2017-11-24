var constants = require('../const/siteconst');

module.exports = {
  /**
   * Get response data
   * @param isSuccess: true -> status: 1, false -> status: 0
   * @param msg: Message will be sent
   * @param data: Data will be sent
   * @returns {{status: *, msg: *, data: *}}
   */
  getAPIResponse:  function(isSuccess, msg, data) {
    return {
      'status': isSuccess ? constants.API_SUCCESS_YES : constants.API_SUCCESS_NO,
      'msg': msg,
      'data': data
    };
  },

  /**
   * The function will be involved after count query is completed. It will send the data to client using socket
   * @param io
   * @param socketName: Socket name: hotelId + requestType + status
   * @param channel: Channel name: requestType + status
   * @param data: Data will be sent
   */
  socketEmmit: function (io, socketName, channel, data) {
    io.sockets.in(socketName).emit(channel, data);
  },

  /**
   * Get socket name
   * @param hotelId
   * @param socketType
   * @param status
   * @returns {string}
   */
  getSocketName: function (hotelId, socketType, status) {
    return [hotelId, socketType, status].toString();
  },

  /**
   * Get channel name
   * @param socketType
   * @param status
   * @returns {string}
   */
  getChannel: function (socketType, status) {
    return [socketType, status].toString();
  }
};
