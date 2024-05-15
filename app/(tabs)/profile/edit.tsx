import React, { useEffect } from "react";
import * as GlobalStyles from "../../../GlobalStyles";
import * as StyleSheet from "../../../utils/StyleSheet";
import openImagePickerUtil from "../../../utils/openImagePicker";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PhoneInput from "react-native-phone-input";

import {
  DatePicker,
  HStack,
  IconButton,
  NumberInput,
  Pressable,
  ScreenContainer,
  withTheme,
} from "@draftbit/ui";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TextStyles } from "../../../blocks/Typography.stylesheet";
import EmailInput from "../../../blocks/EmailInput";
import TextInput from "../../../blocks/TextInput";
import { TextInputStyles } from "../../../blocks/Input.stylesheet";

const EditProfileScreen = (props: { theme: any; navigation: any }) => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState("");
  const [submit, setSubmit] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [bioValue, setBioValue] = React.useState("");
  const [lastNameValue, setLastNameValue] = React.useState("");
  const [firstNameValue, setFirstNameValue] = React.useState("");
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setKeyboardHeight((prev) =>
          prev < e.endCoordinates.height || e.endCoordinates.height === 0
            ? e.endCoordinates.height
            : prev
        );
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const onChangeEmail = (newEmail: React.SetStateAction<string>) => {
    try {
      setEmail(newEmail);
    } catch (err) {
      console.error(err);
    }
  };
  const onChanGeBio = (newBioValue: React.SetStateAction<string>) => {
    try {
      setBioValue(newBioValue);
    } catch (err) {
      console.error(err);
    }
  };
  const onChangeLastName = (newLastNameValue: React.SetStateAction<string>) => {
    try {
      setLastNameValue(newLastNameValue);
    } catch (err) {
      console.error(err);
    }
  };
  const onChangeFirstName = (
    newFirstNameValue: React.SetStateAction<string>
  ) => {
    try {
      setFirstNameValue(newFirstNameValue);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = () => {
    try {
      setSubmit(true);
      if (errors.length > 0) {
        return;
      } else {
        alert("Profile Updated");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={24}
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: theme.colors.background,
          paddingHorizontal: 16,
          paddingVertical: 32,
        }}
        contentInsetAdjustmentBehavior="never"
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: "column", padding: 16, width: "100%" },
            dimensions.width
          )}
        >
          {/* User Profile Image */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: "flex-end",
                flexDirection: "row",
                justifyContent: "center",
              },
              dimensions.width
            )}
          >
            <HStack style={{ alignItems: "flex-end" }}>
              <Image
                resizeMode={"cover"}
                source={{
                  uri: `https://firebasestorage.googleapis.com/v0/b/kali-f3ff6.appspot.com/o/profile-pictures%2Fmarie.jpeg?alt=media&token=20b5d97d-8a07-471e-83eb-097f70f99a35`,
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)["Image"].style,
                    { borderRadius: 96, height: 96, width: 96 }
                  ),
                  dimensions.width
                )}
              />
              <Pressable>
                {/* Close Wrapper */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: "center",
                      backgroundColor: theme.colors["Custom Color_4"],
                      borderRadius: 20,
                      flexDirection: "column",
                      paddingBottom: 8,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                >
                  {/* Edit Button */}
                  <IconButton
                    onPress={() => {
                      const handler = async () => {
                        try {
                          await openImagePickerUtil({
                            mediaTypes: "Images",
                            allowsEditing: true,
                            quality: 0.2,
                            allowsMultipleSelection: false,
                            permissionErrorMessage:
                              "Sorry, we need media library permissions to make this work.",
                            showAlertOnPermissionError: true,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      };
                      handler();
                    }}
                    color={"#202020"}
                    icon={"Entypo/camera"}
                    size={24}
                    style={{
                      opacity: 0.96,
                      marginLeft: -50,
                      height: 42,
                      width: 42,
                      backgroundColor: theme.colors.divider,
                      borderRadius: 21,
                      borderWidth: 3,
                      borderColor: theme.colors.background,
                    }}
                  />
                </View>
              </Pressable>
            </HStack>
          </View>
        </View>

        {/* Container */}

        {/* Name */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: "stretch", gap: 8 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"],
            ]}
          >
            {"First Name"}
          </Text>
          <TextInput
            onChangeText={onChangeFirstName}
            value={firstNameValue}
            onSubmitEditing={onSubmit}
            errors={submit ? errors : []}
            placeholder={"Name"}
            theme={theme}
            submitLabel="next"
            autoComplete={"name"}
          />
        </View>
        {/* Last Name */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: "stretch", gap: 8 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"],
            ]}
          >
            {"Last Name"}
          </Text>
          <TextInput
            onChangeText={onChangeLastName}
            textInputValue={lastNameValue}
            onSubmitEditing={onSubmit}
            errors={submit ? errors : []}
            placeholder={"Name"}
            theme={theme}
            submitLabel="next"
            autoComplete={"name"}
          />
        </View>
        {/* Bio */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: "stretch", gap: 8 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"],
            ]}
          >
            {"Bio"}
          </Text>
          <TextInput
            autoComplete={"off"}
            numberOfLines={8}
            onChangeText={onChanGeBio}
            textInputValue={bioValue}
            onSubmitEditing={onSubmit}
            errors={[]}
            placeholder={"Tell us why you are leaving..."}
            theme={theme}
            submitLabel="done"
          />
        </View>
        {/* Mail */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: "stretch", gap: 8 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"],
            ]}
          >
            {"Mail"}
          </Text>
          <EmailInput
            onChangeText={onChangeEmail}
            textInputValue={email}
            errors={submit ? errors : []}
            placeholder={"Email"}
            theme={theme}
            submitLabel="next"
          />
        </View>
        {/* Phone Number */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: "stretch", gap: 8 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"],
            ]}
          >
            {"Phone Number"}
          </Text>
          <PhoneInput
            style={{
              height: 50,
              ...TextInputStyles(theme)["TextInput"].style,
              marginBottom: 16,
            }}
            initialCountry={"us"}
            initialValue="13178675309"
            textProps={{
              placeholder: "Enter a phone number...",
            }}
          />
        </View>
        {/* Birthday */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: "stretch", gap: 8 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"],
            ]}
          >
            {"Birthday"}
          </Text>
          <DatePicker
            disabled={false}
            label={"Date"}
            leftIconMode={"inset"}
            onDateChange={(newDatePickerValue) => {
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            assistiveText={"mm/dd/yyyy"}
            autoDismissKeyboard={true}
            borderColorActive={theme.colors["Custom Color"]}
            date={datePickerValue}
            hideLabel={true}
            maximumDate={"12/31/2006"}
            mode={"date"}
            style={StyleSheet.applyWidth(
              {
                borderColor: "rgb(93, 93, 93)",
                borderRadius: 16,
                color: "rgb(31, 41, 55)",
                fontFamily: "Raleway_400Regular",
              },
              dimensions.width
            )}
            type={"solid"}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default withTheme(EditProfileScreen);
