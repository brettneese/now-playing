const HomeAssistant = require("homeassistant");
const hass = new HomeAssistant({
  host: process.env.HASS_HOST || "http://hassio.local",
  port: process.env.HASS_PORT || 8123,
  // Your long lived access token generated on your profile page.
  // Optional
  token: process.env.HASS_TOKEN,
});

module.exports.nowPlayingUrl = async function () {
  let state = await hass.states.get(
    "media_player",
    process.env.HASS_MEDIA_PLAYER_ID
  );

  if (state.state == "playing") return state.attributes.media_content_id;
};
