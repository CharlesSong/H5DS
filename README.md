### **简介** 

- H5DS (HTML5 Design software) 这是一款基于WEB的 H5制作工具。让不会写代码的人也能轻松快速上手制作H5页面。

### **安装使用说明**

运行环境 node v6.x mysql v5.6 (及以上环境)



1. 新建数据库h5ds，导入数据 h5ds.sql，进入目录 /h5ds/build/conf 修改数据库配置
2. 进入目录/h5ds 安装开发库所需依赖 npm i
3. 进入目录/h5ds/build 安装后端所需依赖 npm i
4. 进入目录/h5ds 启动开发环境 npm start
5. 进入目录/h5ds/build 启动后端环境 npm start
6. 浏览器输入：http://localhost:8000 即可访问
7. 进入目录/h5ds 打包 npm run build
