module.exports = {
  timestampOpts: { // Make Mongoose use Unix time (1 Jan 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  },
};
