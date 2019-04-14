# Localization

## 1. How to add new language

### Step 1: Add new language to project configuration

- Open file `PROJECT_FOLDER/app/config/config.json`

- Add new language code to field: LOCALES and LOCALE_MAP

Language code should conform standard *ISO 639-1 Code* (https://www.loc.gov/standards/iso639-2/php/code_list.php)

For example: adding Vietnamese (language code: vi)
```json
{
  "BASE_URL": "http://ec2-54-199-167-210.ap-northeast-1.compute.amazonaws.com/api",
  "API_TIMEOUT": 10000,
  "DEFAULT_LOCALE": "en",
  "LOCALES": [
    "en",
    "ja",
    "vi"
  ],
  "LOCALE_MAP": {
    "en": "en_US",
    "ja": "ja_JP",
    "vi": "vi_VN"
  }
}
```

- Create new language translation file with format `LANGUAGE_CODE.json` to `PROJECT_FOLDER/app/i18n/languages`

For example: for Vietnamese, we need to add vi.json to `PROJECT_FOLDER/app/i18n/languages`

- Copy content of en.json to `LANGUAGE_CODE.json`, then translate
