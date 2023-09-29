export default function iterateThroughObject(reportWithIterator) {
    return reportWithIterator.map(item => item + '|');
}