import { NavLink } from "react-router-dom";

import "./StoryNavigation.css";

function StoryNavigation() {
  return (
    <nav className="story-navigation" aria-label="Stories and inspiration">
      <NavLink
        className={({ isActive }) =>
          `story-navigation__link ${
            isActive ? "story-navigation__link_active" : ""
          }`
        }
        to="/blog"
        end
      >
        Stories &amp; Guides
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `story-navigation__link ${
            isActive ? "story-navigation__link_active" : ""
          }`
        }
        to="/inspiration"
      >
        Montenegro Through Other Eyes
        <span aria-hidden="true"> →</span>
      </NavLink>
    </nav>
  );
}

export default StoryNavigation;
