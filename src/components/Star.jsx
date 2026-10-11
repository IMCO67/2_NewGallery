export function Star({ star, raiting, avisaRate }) {
    return (
        <span className={star > raiting ? "star" : 'active'}>
            <a onClick={() => avisaRate(star)}>{'\u2605'}</a>
        </span>
    );
}