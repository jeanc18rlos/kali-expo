import {
  IconButton,
  SimpleStyleFlatList,
  TextInput,
  VStack,
} from "@draftbit/ui";
import * as StyleSheet from "../utils/StyleSheet";
import { TextStyles } from "./Typography.stylesheet";
import { TextInputStyles } from "./Input.stylesheet";
import { Text, View } from "react-native";
import React from "react";

type PasswordInputProps = {
  onChangeText: (value: string) => void;
  textInputValue: string;
  errors: string[];
  placeholder: string;
  theme: KaliThemeType;
  maxErrors?: number;
  onSubmitEditing?: () => void;
  submitLabel: string;
};

export default function PasswordInput({
  onChangeText,
  textInputValue,
  errors,
  theme,
  maxErrors = 1,
  onSubmitEditing,
  placeholder,
  submitLabel,
}: PasswordInputProps) {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <VStack>
      <View
        style={{
          position: "relative",
        }}
      >
        <TextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={isHidden}
          changeTextDelay={500}
          onChangeText={onChangeText}
          webShowOutline={true}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          autoComplete="password"
          returnKeyType={submitLabel as any}
          style={[
            TextInputStyles(theme)["TextInput"].style,
            errors.length > 0
              ? TextInputStyles(theme)["InputErrorMessage"].style
              : {},
          ]}
          value={textInputValue}
        />

        <IconButton
          style={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          icon={
            isHidden ? "Ionicons/ios-eye-off-sharp" : "Ionicons/ios-eye-sharp"
          }
          onPress={() => {
            setIsHidden(!isHidden);
          }}
        />
      </View>

      <SimpleStyleFlatList
        data={errors.slice(0, maxErrors)}
        style={{
          height: maxErrors * 24,
          marginTop: 8,
        }}
        scrollEnabled={false}
        horizontal={false}
        inverted={false}
        keyExtractor={(listData, index) => `${index} - ${listData}`}
        keyboardShouldPersistTaps={"never"}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => {
          const listData = item;
          return (
            <Text
              key={item}
              accessible={true}
              style={[
                StyleSheet.compose(
                  TextStyles(theme)["Body"].style,
                  TextStyles(theme)["ErrorMessage"].style
                ),
              ]}
            >
              {listData}
            </Text>
          );
        }}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      />
    </VStack>
  );
}
