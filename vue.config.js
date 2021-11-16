module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "mDitor",
        appId: "com.sample.myapplication",
        win: {
          icon: "src/assets/app.ico",
          target: [
            {
              target: "zip", // 'zip', 'nsis', 'portable'
              arch: ["x64"], // 'x64', 'ia32'
            },
          ],
        },
      },
    },
  },
};
