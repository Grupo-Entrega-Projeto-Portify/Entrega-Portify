import { StyledUl } from "./styled"
import img from "../../../../../../assets/HomePage/iconLiPortify.svg"
import { BiPencil } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"

export const UlProjects = () => {
  return (
    <>
      <StyledUl>
        <div className="ul__div">
          <ul className="ul">
            <li className="ul__li">
              <div className="ul__name">
                <img src={img} alt="imagem do projeto" className="ul__img" />
                <div className="ul__div-1">
                  <p className="ul__myproject">meu projeto</p>
                  <p className="ul__lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="ul__icons">
                <BiPencil size={30} />
                <BsTrash size={30} />
              </div>
            </li>
          </ul>
        </div>
      </StyledUl>
    </>
  )
}
