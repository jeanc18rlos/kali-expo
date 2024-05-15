import { SimpleStyleFlatList, TextInput, VStack } from "@draftbit/ui";
import * as StyleSheet from "../utils/StyleSheet";
import { TextStyles } from "./Typography.stylesheet";
import { TextInputStyles } from "./Input.stylesheet";
import { Text } from "react-native";

type EmailInputProps = {
  onChangeText: (value: string) => void;
  textInputValue: string;
  errors: string[];
  placeholder: string;
  theme: KaliThemeType;
  maxErrors?: number;
  onSubmitEditing?: () => void;
  submitLabel: string;
};

export default function EmailInput({
  onChangeText,
  textInputValue,
  errors,
  theme,
  maxErrors = 1,
  onSubmitEditing,
  placeholder,
  submitLabel,
}: EmailInputProps) {
  return (
    <VStack>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        changeTextDelay={500}
        onChangeText={onChangeText}
        webShowOutline={true}
        returnKeyType={submitLabel as any}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        autoComplete="email"
        placeholderTextColor={theme.colors.tertiary}
        keyboardType="email-address"
        style={[
          TextInputStyles(theme)["TextInput"].style,
          errors.length > 0
            ? TextInputStyles(theme)["InputErrorMessage"].style
            : {},
        ]}
        value={textInputValue}
      />
      <SimpleStyleFlatList
        data={errors}
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
