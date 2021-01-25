const { Sonos } = require("sonos");

async function main() {
  const sonos = new Sonos(process.env.SONOS_HOST);
  const zone = await sonos.getZoneInfo();
  const macCleaned = zone.MACAddress.replace(/:/g, "");

  const uri = `x-rincon-stream:RINCON_${macCleaned}01400`;
  const result = await sonos.setAVTransportURI(uri);
  if (!result) {
    console.error('error switching AV transport')
    process.exit(1)
  }
  console.log('switched successfully')
}

main();
