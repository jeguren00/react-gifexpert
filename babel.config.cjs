module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: "current" } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};