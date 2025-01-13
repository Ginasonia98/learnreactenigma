/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

// TodoCard.jsx
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux"; // Import hooks dari react-redux
import { withAlert } from "../hoc/withAlert";
import { withBackground } from "../hoc/withBackground";
import { useState } from "react";

const TodoCard = (props) => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities); // Ambil activities dari Redux

  const [editingActivityId, setEditingActivityId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const handleAddActivity = () => {
    dispatch({
      type: "ADD_ACTIVITY",
      payload: { id: activities.length + 1, name: "New Activity" },
    });
  };

  const handleRemoveActivity = (id) => {
    dispatch({
      type: "REMOVE_ACTIVITY",
      payload: id,
    });
  };

  const handleEditActivity = (id, name) => {
    setEditingActivityId(id);
    setEditedName(name);
  };

  const handleSaveEdit = (id) => {
    if (editedName.trim() === "") {
      alert("Activity name cannot be empty!"); // Optional: Handle validation for empty name
      return;
    }
    dispatch({
      type: "EDIT_ACTIVITY",
      payload: { id, name: editedName },
    });
    setEditingActivityId(null); // Reset editing state
  };

  return (
    <Card className="w-64 shadow-lg">
      <CardHeader className="font-bold text-lg text-center">
        Rutinitas
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="list-decimal list-inside">
          {activities.map((activity) => (
            <li key={activity.id} className="flex justify-between items-center">
              {editingActivityId === activity.id ? (
                <div className="flex items-center">
                  <Input
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    size="sm"
                    className="mr-2"
                  />
                  <Button onClick={() => handleSaveEdit(activity.id)} size="sm">
                    Save
                  </Button>
                </div>
              ) : (
                <span>{activity.name}</span>
              )}

              <div className="flex space-x-2">
                <Button
                  onClick={() => handleRemoveActivity(activity.id)}
                  className="flex justify-center items-center mt-3"
                  size="sm"
                >
                  Remove
                </Button>

                {editingActivityId !== activity.id && (
                  <Button
                    onClick={() =>
                      handleEditActivity(activity.id, activity.name)
                    }
                    className="flex justify-center items-center mt-3"
                    size="sm"
                  >
                    Edit
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <Button onPress={handleAddActivity}>Add Activity</Button>
      </CardFooter>
    </Card>
  );
};

TodoCard.propTypes = {
  day: PropTypes.string,
  numberOfActivities: PropTypes.number,
};

export default withBackground(withAlert(TodoCard));
