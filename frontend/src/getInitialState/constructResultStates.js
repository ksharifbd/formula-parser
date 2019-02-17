function constructResultStates(arr) {
    return arr.reduce((acc, cur, idx) => {
        acc[`result_fid_${idx + 1}`] = 0;

        return acc;
    }, {});
}

export default constructResultStates;
