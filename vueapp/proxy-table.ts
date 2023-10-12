const proxyTable = {
    api:{
        '^/api': {
            target: 'https://localhost:7244/',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ""),
        }
    }
};