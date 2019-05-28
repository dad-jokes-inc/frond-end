import React from 'react';

const JokeForm = () => {
    return(
        <div>
            <form>
                <input placeholder="Joke" />
                <input placeholder="Username" />
                <button>Submit Joke</button>
            </form>
        </div>
    )
}

export default JokeForm;