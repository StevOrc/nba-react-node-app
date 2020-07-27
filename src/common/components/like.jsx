import React from 'react';

const Like = (props) => {
    const renderIsLikeOrUnlike = () => {
        const {item, isLiked, onLike} = props;
        const likeClass = 'fa fa-heart';
        return <i
            className={isLiked ? likeClass : likeClass + '-o'}
            style={{cursor: 'pointer'}}
            onClick={() => onLike(item)}
            ></i>
    }

    return (
        <React.Fragment>
            <span>
                {renderIsLikeOrUnlike()}
            </span>
        </React.Fragment>
    );
}
 
export default Like;