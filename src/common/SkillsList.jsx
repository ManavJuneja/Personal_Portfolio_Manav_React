function SkillsList({src,skill}) {
  return (
    <span>
            <img src={src} alt={`${src}icon`} />
            <p>{skill}</p>
        </span>
  )
}

export default SkillsList