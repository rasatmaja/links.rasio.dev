import PropTypes from 'prop-types';
export default function CardLink({ data }) {
    return (
        <a href={data.hyperlinks} target="_blank" rel="noreferrer">
            <div className="bg-secondry-light dark:bg-secondry-dark p-3 rounded-md flex justify-between">
                <div>
                    <h3 className="font-medium">{data.name}</h3>
                    <p className="text-sm">{data.description}</p>
                </div>
                <img src="/arrow-right.svg" width="16" height="16" alt="Arrow right icon"></img>
            </div>
        </a>
    );
}

CardLink.propTypes = {
    data: PropTypes.object.isRequired
};
