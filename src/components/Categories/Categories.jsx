import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import r1 from "../../resources/images/categories-images/sale.jpg";
import r2 from "../../resources/images/categories-images/women.jpg";
import r3 from "../../resources/images/categories-images/new.jpg";
import r4 from "../../resources/images/categories-images/men.jpg";
import r5 from "../../resources/images/categories-images/accessories.jpg";
import r6 from "../../resources/images/categories-images/shoes.jpg";

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src={r1}
            alt='This part represents the sale category and has a button'
          />
          <button>
            <Link className='link' to='/products/1'>
              Sale
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src={r2}
            alt='This part represents the women category and has a button'
          />
          <button>
            <Link className='link' to='/products/1'>
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src={r3}
            alt='This part represents the new season category and has a button'
          />
          <button>
            <Link className='link' to='/products/1'>
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src={r4}
                alt='This part represents the men category and has a button'
              />
              <button>
                <Link className='link' to='/products/1'>
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src={r5}
                alt='This part represents the accessories category and has a button'
              />
              <button>
                <Link className='link' to='/products/1'>
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src={r6}
            alt='This part represents the shoes category and has a button'
          />
          <button>
            <Link className='link' to='/products/1'>
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
