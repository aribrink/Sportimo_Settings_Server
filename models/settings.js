'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var SettingsSchema = new mongoose.Schema({

  ios_current_build_version: Number,
  android_current_build_version: Number,
  update_required: Boolean,
  build_settings: mongoose.Schema.Types.Mixed
})

module.exports = mongoose.model("settings", SettingsSchema);
