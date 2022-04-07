const home=ctx=>{
    console.log('请求了home页面');
    ctx.request.type='html';
    ctx.response.body="<p>home页面测试</p>"
}

module.exports.home=home;