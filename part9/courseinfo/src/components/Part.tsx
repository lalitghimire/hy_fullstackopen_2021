import React from 'react';
import { CoursePart } from '../type';

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

const Part = ({ part }: { part: CoursePart }) => {
    switch (part.type) {
        case 'normal':
            return (
                <div>
                    <p>
                        <b>
                            {part.name} {part.exerciseCount}
                        </b>
                        <br />
                        <i>{part.description} </i>
                    </p>
                </div>
            );

        case 'groupProject':
            return (
                <div>
                    <p>
                        <b>
                            {part.name} {part.exerciseCount}
                        </b>
                        <br />
                        project exercises {part.groupProjectCount}
                    </p>
                </div>
            );

        case 'submission':
            return (
                <div>
                    <p>
                        <b>
                            {part.name} {part.exerciseCount}
                        </b>
                        <br />
                        <i>{part.description} </i> <br />
                        submit to {part.exerciseSubmissionLink}
                    </p>
                </div>
            );
        case 'special':
            return (
                <div>
                    <p>
                        <b>
                            {part.name} {part.exerciseCount}
                        </b>
                        <br />
                        <i>{part.description} </i> <br />
                        required skills: {part.requirements.toString()}
                    </p>
                </div>
            );
        default:
            return assertNever(part);
    }
};

export default Part;
