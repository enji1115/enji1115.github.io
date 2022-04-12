const runner_input = ['cho', 'eun', 'ji', 'kim'];
const complet_input = ['cho', 'eun', 'ji'];

const test2 = (runner, complet) => {
    let runner_cop = runner;
    for (let run_i = 0; run_i < complet.length; run_i++) {
        if (runner_input.indexOf(complet[run_i]) > -1) runner_cop.splice(runner_input.indexOf(complet[run_i]), 1);
    }

    return runner_cop;
}

console.log(test2(runner_input, complet_input));