// Iteration 1

getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => error
                );
              },
              (error) => error
            );
          },
          (error) => error
        );
      },
      (error) => error
    );
  },
  (error) => error
);

// Iteration 2

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  })

  .then(() => obtainInstruction("steak", 1))
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  })

  .then(() => obtainInstruction("steak", 2))
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  })

  .then(() => obtainInstruction("steak", 3))
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  })

  .then(() => obtainInstruction("steak", 4))
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  })

  .then(() => obtainInstruction("steak", 5))
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  })

  .then(() => obtainInstruction("steak", 6))
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  })

  .then(() => obtainInstruction("steak", 7))
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  })

  .catch((err) => console.log(err))

  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await

async function makeBroccoli() {
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();
//"brusselsSprouts"
Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
]).then((step) => {
  for (let i = 0; i < step.length; i++) {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${step[i]}</li>`;
  }
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
