export default function CardLink(){
    return(
        <div className="bg-secondry-light dark:bg-secondry-dark p-3 rounded-md flex justify-between">
            <div>
                <h3 className="font-medium">
                    Email
                </h3>
                <p className="text-sm">
                    If you would like to discuss about your ideas.
                </p>
            </div>
            <img src="/arrow-right.svg" width="16" height="16" alt="Arrow right icon"></img>
        </div>
    )
}