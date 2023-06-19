function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function countDown() {
  console.log("Starting countdown...");
  for (let i = 5; i >= 0; i--) {
    console.log(i);
    await delay(1000);
  }
  console.log("Blast off!");
}

countDown();
