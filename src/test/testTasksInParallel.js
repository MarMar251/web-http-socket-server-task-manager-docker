import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 100,
    duration: '30s',
};

const url = 'http://localhost:8001/';

const tasks = [
    { taskName: 'TaskFiboRecursive', input: '46' },
    { taskName: 'TaskFiboRecursive', input: '45' },
    { taskName: 'TaskBitcoin', input: '5' },
    { taskName: 'TaskBubbleSort', input: '10,9,8,7,6,5,4,3,2,1' },
    { taskName: 'TaskBubbleSort', input: '20,9,18,7,36,5,44,3,22,1' },
    { taskName: 'TaskSumOfPrimes', input: '50' },
    { taskName: 'TaskSumOfPrimes', input: '100' },
];

export default function () {
    const task = tasks[Math.floor(Math.random() * tasks.length)];

    const payload = `${task.taskName}&${task.input}`;

    const params = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    let res = http.post(url, payload, params);

    check(res, {
        'status was 200': (r) => r.status === 200,
    });

    sleep(0.6);
}
