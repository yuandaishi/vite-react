const ws=ctx=>{
    console.log('请求了ws页面');
    ctx.request.type='html';
    ctx.response.body="<p>websocket页面测试</p>"
}

module.exports.ws=ws;