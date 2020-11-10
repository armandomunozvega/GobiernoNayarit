// Dependencies
import { useDispatch, useSelector } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AttachFile from "@material-ui/icons/AttachFile";

// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// layout
import MainLayout from "~/layouts/main";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";

// Inputs
import TextInput from "~/components/CustomTextInput/CustomTextInput";
import CustomSelect from "~/components/CustomSelect/CustomSelect";
import CustomCheckBox from "~/components/CustomCheckBox/CustomCheckBox";
import CustomRadio from "~/components/CustomRadio/CustomRadio";
import DateTime from "~/components/DateTime/DateTime";
import FileInput from "~/components/CustomFileInput/CustomFileInput";
import Button from "~/components/CustomButtons/Button";

// Table
import Table from "~/components/Table/Table";

// actions
import { getList } from "~/reducers/home";

const styles = {};

const useStyles = makeStyles(styles);

const Home = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(({ root }) => root.home);

  React.useEffect(() => {
    dispatch(getList());
  }, []);

  const actionButtons = (id) =>
    [
      { color: "transparent", icon: Edit },
      { color: "transparent", icon: Close },
    ].map((prop, key) => {
      return (
        <Button
          key={key} // eslint-disable-line react/no-array-index-key
          simple
          round
          justIcon
          size="sm"
          color={prop.color}
          onClick={() => console.log(id)} // eslint-disable-line no-console
        >
          <prop.icon />
        </Button>
      );
    });

  const renderList = () => {
    return list.map((listItem) => {
      // eslint-disable-next-line camelcase
      const { id, name, year, color, pantone_value } = listItem;
      return [
        id,
        name,
        year,
        color,
        // eslint-disable-next-line camelcase
        pantone_value,
        actionButtons(id),
      ];
    });
  };

  const classes = useStyles();

  return (
    <MainLayout>
      <GridContainer>
        <GridItem sm={12} md={6} lg={6}>
          <GridContainer>
            <GridItem>
              <h3>Form example</h3>
            </GridItem>
            <GridItem sm={12} md={6} lg={6}>
              <TextInput
                labelText="Text input"
                id="text-input"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  placeholder: "I'm a text input",
                  type: "text",
                }}
                handleChange={() => {}}
              />
            </GridItem>
            <GridItem sm={12} md={6} lg={6}>
              <CustomSelect
                labelText="Select input"
                id="custom-select-input"
                placeholder="Select an option"
                options={[
                  {
                    id: 1,
                    label: "Option 1",
                  },
                  {
                    id: 2,
                    label: "Option 2",
                  },
                  {
                    id: 3,
                    label: "Option 3 disabled",
                    disabled: true,
                  },
                ]}
                handleChange={() => {}}
              />
            </GridItem>
            <GridItem sm={12} md={6} lg={6}>
              <CustomCheckBox
                label="Checkbox"
                checked
                handleChange={() => {}}
              />
            </GridItem>
            <GridItem sm={12} md={6} lg={6}>
              <CustomRadio
                label="Radio"
                name="custom-input-radio"
                checked
                handleChange={() => {}}
              />
            </GridItem>
            <GridItem sm={12} md={6} lg={6}>
              <DateTime
                labelText="Date time"
                id="custom-date-time"
                value=""
                handleChange={() => {}}
              />
            </GridItem>
            <GridItem sm={12} md={6} lg={6}>
              <FileInput
                labelText="Single File"
                id="custom-file-input"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  placeholder: "Upload Single File",
                }}
                endButton={{
                  buttonProps: {
                    round: true,
                    justIcon: true,
                    color: "transparent",
                  },
                  icon: <AttachFile />,
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem sm={12} md={6} lg={6}>
          <GridContainer>
            <GridItem>
              <h3>Table example edited</h3>
            </GridItem>
            <GridItem xs={12} md={12} lg={12}>
              <Table
                striped
                tableHead={[
                  "#",
                  "Name",
                  "Year",
                  "HEX Color",
                  "Pantone",
                  "Actions",
                ]}
                tableData={renderList()}
                customCellClasses={[
                  classes.textCenter,
                  classes.padding0,
                  classes.textRight,
                  classes.textRight,
                ]}
                customClassesForCells={[0, 1, 5, 6]}
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight,
                ]}
                customHeadClassesForCells={[0, 5, 6]}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </MainLayout>
  );
};

export default Home;
