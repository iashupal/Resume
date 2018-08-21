ProgressEvent.propTypes = {
    bar: PropTypes.bool,
    tag: PropTypes.string,
    value: PropTypes.oneofType([
        PropTypes.string,
        PropTypes.number,
    ]),
    max: PropTypes.oneof([
        PropTypes.string,
        PropTypes.number,
    ]),
    animated: PropTypes.bool,
    striped: propTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string,
    barclassName: PropTypes.string
};
ProgressEvent.defaultProps = {
    tag = 'progress',
    value = 0,
    max = 100,

};