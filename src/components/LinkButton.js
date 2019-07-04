import { Link } from "@hyperapp/router";

export const LinkButton = ({ path, title, pathname }) => (
  <Link to={path}>
    <span
      class='button'
      style={{
        fontWeight: pathname === path ? 'bold' : 'normal'
      }}
    >
      {title}
    </span>
  </Link>
)
