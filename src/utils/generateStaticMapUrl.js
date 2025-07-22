function generateStaticMapUrl(activities, apiKey) {
  const pathCoordinates = activities
    .map((act) => `${act.location.lat},${act.location.lng}`)
    .join("|");

  const markers = activities
    .map((act) => `markers=color:red|${act.location.lat},${act.location.lng}`)
    .join("&");

  return `https://maps.googleapis.com/maps/api/staticmap?size=600x300&path=color:0x0000ff|weight:5|${pathCoordinates}&${markers}&key=${apiKey}`;
}

export default generateStaticMapUrl;
