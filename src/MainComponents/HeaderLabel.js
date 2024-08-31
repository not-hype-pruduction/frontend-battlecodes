import react from 'react'

const HeaderItem = ({label, link}) => {

    return (
        <a href={link}>{label}</a>
    )
}

export default HeaderItem;