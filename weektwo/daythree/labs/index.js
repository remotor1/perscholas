let scores = [10, 30, 50, 70, 90, 20, 40, 60, 80, 100];

scores.forEach((score) => {
  if (score >= 80) {
    console.log(score, "-You did a good job");
  } else if (score >= 70) {
    console.log(score, "-Keep trying");
  } else if (score >= 60) {
    console.log(score, "-Kehhhh");
  } else if (score >= 55) {
    console.log(score, "-Not to good");
  } else {
    console.log(score, "-is Bad Grade But You'll Get Em Next Time");
  }
});
