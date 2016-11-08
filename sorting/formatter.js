function formatExecutionTime(executionTime) {
    const seconds = executionTime[0];
    const nanoSeconds = executionTime[1];
    const milliSeconds = nanosecondsToMilliseconds(nanoSeconds);
    return `${seconds}s ${Math.round(milliSeconds)}ms`;
}

function nanosecondsToMilliseconds(nanoSeconds) {
    return nanoSeconds / 1000000;
}

module.exports = {
    formatExecutionTime
};
