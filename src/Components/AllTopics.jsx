import React, { useEffect, useState } from "react";
import { getAllTopics } from "./Utils/apis";
import { Link, useSearchParams } from "react-router-dom";

export default function AllTopics() {
  const [topics, setTopics] = useState([]);
  const [params, setParams] = useSearchParams();
  const topic = params.get("topic")?.toLowerCase();

  useEffect(() => {
    getAllTopics().then((response) => {
      setTopics(response);
    });
  }, [topic]);

  return (
    <div>
      <ul>
        {topics.map((topic, index) => {
          return (
            <li key={index}>
              <Link to={`/articles?topic=${topic.slug}`} topic={topic}>
                {topic.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
