const jwt=require('jsonwebtoken')



module.exports={
    async login2(ctx){

          // 从请求体中获取用户名和密码
    const { identifier, password } = ctx.request.body;
    

    try {
      // 在这里编写验证逻辑，验证用户名和密码是否正确
      // 你可以使用 Strapi 提供的身份验证方法或自定义的逻辑进行验证

      // 假设验证成功
      if (identifier === 'admin' && password === 'sauvereign123') {
        // 生成适用于第二个登录页面的 JWT
        const token = jwt.sign({ identifier }, process.env.JWT_SECRET, { expiresIn: '30' });

        // 返回 JWT
        ctx.send({ token });
      } else {
        // 验证失败
        ctx.throw(401, 'Invalid credentials');
      }
    } catch (error) {
      ctx.throw(500, 'Internal server error');
    }

  
  }
}