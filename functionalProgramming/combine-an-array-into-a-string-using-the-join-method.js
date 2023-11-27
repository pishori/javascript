function sentensify(str) {
  const a = str.split(/\W/).join(" ");
  return a;
}

sentensify("May-the-force-be-with-you");