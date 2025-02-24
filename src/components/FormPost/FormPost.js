import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addpost } from "../../action/Action";
import { addPost } from "../../action/userPostsAction";
import "./FormPost";

import axios from "axios";

export default function FormPost() {
  const po = useSelector((state) => state.post);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [prix, setPrix] = useState(0);
  const [article, setArticle] = useState([]);
  const [star, setStar] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [roomate, setRoomate] = useState(0);
  const [maxage, setMaxage] = useState(0);
  const [minage, setMinage] = useState(0);

  const handlfile = (e) => {
    if (article) {
      setArticle(e.target.files);
    }
  };

  console.log(article);
  const sub = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const user = JSON.parse(localStorage.getItem("userData"));

    formData.append("city", city);
    formData.append("price", prix);
    formData.append("title", title);

    formData.append("postImages", article[0]);
    formData.append("postImages", article[1]);
    formData.append("postImages", article[2]);
    formData.append("postImages", article[3]);

    formData.append("description", description);
    formData.append("stars", star);

    formData.append("status", status);
    formData.append("gender", gender);

    formData.append("roommatesNumber", roomate);
    formData.append("roommatesMinAge", maxage);
    formData.append("roommatesMaxAge", minage);

    formData.append("userId", user._id);

    setCity("");
    setPrix("");
    setArticle("");
    setDescription("");
    setStar("");
    setTitle("");
    setStatus("");
    setGender("");
    setRoomate("");
    setMaxage("");
    setMinage("");

    dispatch(addPost(formData));
  };
  return (
    <div>
      <form
        onSubmit={sub}
        encType="multipart/form-data"
        style={{ width:"270px", marginTop: "10px" }}
         
      >
        <div className="row">
          <div className="col-md-6">
            <label
              style={{
                marginInline: "10px",
                marginBottom: "6px",
                fontSize: "14px",
              }}
              htmlFor=""
            >
              Titre
            </label>
            <input
              value={title}
              style={{
                marginInline: "9px",
                border: "1px solid black",
                height: "40px",
              }}
              onChange={(e) => setTitle(e.target.value)}
              id="city"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label
              style={{
                marginInline: "10px",
                marginBottom: "8px",
                fontSize: "14px",
              }}
              htmlFor=""
            >
              Ville
            </label>
            <input
              value={city}
              style={{
                marginInline: "9px",
                border: "1px solid black",
                height: "40px",
              }}
              onChange={(e) => setCity(e.target.value)}
              id="city"
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label
              style={{
                marginInline: "10px",
                marginBottom: "8px",
                fontSize: "14px",
              }}
              htmlFor=""
            >
              sexe
            </label>
            <input
              value={gender}
              style={{
                marginInline: "9px",
                border: "1px solid black",
                height: "40px",
              }}
              onChange={(e) => setGender(e.target.value)}
              id="city"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label
              style={{
                marginInline: "10px",
                marginBottom: "8px",
                fontSize: "14px",
              }}
              htmlFor=""
            >
              Status
            </label>
            <input
              value={status}
              style={{
                marginInline: "9px",
                border: "1px solid black",
                height: "40px",
              }}
              onChange={(e) => setStatus(e.target.value)}
              id="city"
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginInline: "33px" }}
          name=""
          cols="30"
          rows="5"
        ></textarea>
        <div className="row"></div>

        <div className="row">
          <div className="col-md-6">
            <label
              style={{
                marginInline: "10px",
                marginBottom: "6px",
                fontSize: "14px",
              }}
              htmlFor=""
            >
              Colocataire Minimum Age
            </label>
            <input
              className="min"
              value={minage}
              style={{
                marginInline: "9px",
                border: "1px solid black",
                height: "40px",
              }}
              onChange={(e) => setMinage(e.target.value)}
              id="city"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label
              style={{
                marginInline: "10px",
                marginBottom: "8px",
                fontSize: "14px",
              }}
              htmlFor=""
            >
              Colocataire Maximum Age
            </label>
            <input
              className="max"
              value={maxage}
              style={{
                marginInline: "9px",
                border: "1px solid black",
                height: "40px",
              }}
              onChange={(e) => setMaxage(e.target.value)}
              id="city"
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          Nombres des colocataires
        </label>
        <input
          value={roomate}
          style={{
            marginInline: "9px",
            border: "1px solid black",
            height: "40px",
          }}
          onChange={(e) => setRoomate(e.target.value)}
          type="text"
          className="form-control"
        />

        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          prix
        </label>
        <input
          value={prix}
          style={{
            marginInline: "9px",
            border: "1px solid black",
            height: "40px",
          }}
          onChange={(e) => setPrix(e.target.value)}
          type="text"
          className="form-control"
        />

        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          Nombres d'étoile
        </label>
        <input
          value={star}
          style={{
            marginInline: "9px",
            border: "1px solid black",
            height: "40px",
          }}
          onChange={(e) => setStar(e.target.value)}
          type="text"
          className="form-control"
        />

        <br />
        <label
          style={{
            marginInline: "10px",
            marginBottom: "8px",
            fontSize: "14px",
          }}
          htmlFor=""
        >
          Images
        </label>

        <input
          style={{ marginInline: "17px" }}
          type="file"
          filename="article"
          onChange={handlfile}
          multiple
        />

        <br />
        <br />
        <br />
        <button
          type="submit"
          style={{
            marginTop: "-17px",
            height: "47px",
            width: "280px",
            marginInline: "5px",
          }}
          className="btn btn-block btn-dark"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
