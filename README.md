# ![LOGO](sage.png) Sage Business Cloud Accounting - Accounts OIH Connector

## Description

[![Generic badge](https://img.shields.io/badge/Status-NotTested!-lightgrey.svg)](https://shields.io/)

A generated OIH connector for the Sage Business Cloud Accounting - Accounts API (version 3.1).

Generated from: https://api.accounting.sage.com/v3.1<br/>
Generated at: 2021-04-22T22:49:29+02:00

## API Description

Documentation of the Sage Business Cloud Accounting API.<br/>

## Authorization

This API does not require authorization.

## Actions

### Returns all Coa Accounts

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Coa Accounts`

#### Input Parameters

- `coa_template_id` - _optional_ - Use this to filter by COA Template<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Coa Accounts changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Coa Accounts per request.<br/>
- `page` - _optional_ - Go to specific page of Coa Accounts<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Coa Accounts (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_coa_accounts

### x_sage_changelog_coa_accounts

### Returns a Coa Account

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Coa Accounts`

#### Input Parameters

- `key` - _required_ - The Coa Account Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Coa Account (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_coa_accounts\_\_key*

### x*sage_changelog_coa_accounts\_\_key*

### Returns all Coa Templates

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Coa Templates`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Coa Templates per request.<br/>
- `page` - _optional_ - Go to specific page of Coa Templates<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Coa Templates (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `country_id` - _optional_ - Use this to filter by country id<br/>

### x_sage_pathtitle_coa_templates

### x_sage_changelog_coa_templates

### Returns a Coa Template

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Coa Templates`

#### Input Parameters

- `key` - _required_ - The Coa Template Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Coa Template (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_coa_templates\_\_key*

### x*sage_changelog_coa_templates\_\_key*

### Returns all Ledger Accounts

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Purchases`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Products & Services`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Contacts`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Bank`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Journals`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Ledger Accounts`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Ledger Accounts changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `visible_in` - _optional_ - Use this to limit the response to ledger account types visible in a specific area. Valid values are: banking, sales, expenses, other_payments, other_receipts, journals and reporting<br/>
  Possible values: sales, banking, expenses, other_payments, other_receipts, journals, reporting.
- `not_visible_in` - _optional_ - Use this to limit the response to ledger account types not visible in a specific area.<br/>
  Possible values: sales, banking, expenses, other_payments, other_receipts, journals, reporting.
- `show_included_in_chart` - _optional_ - Use this to limit the response to ledger accounts that are/are not included in the chart<br/>
- `show_control_accounts` - _optional_ - Use this to limit the response to ledger accounts that are/are not control accounts<br/>
- `ledger_account_classification_id` - _optional_ - Use this to filter by ledger account classification id<br/>
- `show_balance_details` - _optional_ - Use this to display the balance details for ledger accounts between a date range (requires from_date and to_date).<br/>
- `exclude_deleted_entries` - _optional_ - Exclude deleted ledger entries.<br/>
- `from_date` - _optional_ - Calculate balances from this date.<br/>
- `to_date` - _optional_ - Calculate balances to this date.<br/>
- `search` - _optional_ - Use this to filter by the item code or description<br/>
- `sort_order_from_user_setting` - _optional_ - Use this to enable ordering ledger accounts according to user settings. Defaulted to 'false'.<br/>
- `items_per_page` - _optional_ - Returns the given number of Ledger Accounts per request.<br/>
- `page` - _optional_ - Go to specific page of Ledger Accounts<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ledger Accounts (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `ledger_account_type_id` - _optional_ - Use this to filter by ledger account type id<br/>

### x_sage_pathtitle_ledger_accounts

### x_sage_changelog_ledger_accounts

### Creates a Ledger Account

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , <br/>
> * Accounting Standard: , , , , <br/>
> * Accounting Start: , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Ledger Accounts`

### Returns a Ledger Account

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Purchases`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Products & Services`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Contacts`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Bank`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Journals`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Ledger Accounts`

#### Input Parameters

- `key` - _required_ - The Ledger Account Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Ledger Account (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `show_balance_details` - _optional_ - Use this to display the balance details for ledger accounts between a date range (requires from_date and to_date).<br/>
- `exclude_deleted_entries` - _optional_ - Exclude deleted ledger entries.<br/>
- `from_date` - _optional_ - Calculate balances from this date.<br/>
- `to_date` - _optional_ - Calculate balances to this date.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ledger Account (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_ledger_accounts\_\_key*

### x*sage_changelog_ledger_accounts\_\_key*

### Updates a Ledger Account

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Ledger Accounts`

#### Input Parameters

- `key` - _required_ - The Ledger Account Key.<br/>

### Returns all Ledger Account Classifications

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Ledger Account Classifications`

#### Input Parameters

- `ledger_account_type_id` - _optional_ - Use this to filter by ledger account type id<br/>
- `items_per_page` - _optional_ - Returns the given number of Ledger Account Classifications per request.<br/>
- `page` - _optional_ - Go to specific page of Ledger Account Classifications<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ledger Account Classifications (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_ledger_account_classifications

### x_sage_changelog_ledger_account_classifications

### Returns a Ledger Account Classification

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Ledger Account Classifications`

#### Input Parameters

- `key` - _required_ - The Ledger Account Classification Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ledger Account Classification (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_ledger_account_classifications\_\_key*

### x*sage_changelog_ledger_account_classifications\_\_key*

### Returns all Ledger Account Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Ledger Account Types`

#### Input Parameters

- `ledger_account_classification_id` - _optional_ - Use this to filter by ledger account classification id<br/>
- `items_per_page` - _optional_ - Returns the given number of Ledger Account Types per request.<br/>
- `page` - _optional_ - Go to specific page of Ledger Account Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ledger Account Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_ledger_account_types

### x_sage_changelog_ledger_account_types

### Returns a Ledger Account Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Ledger Account Types`

#### Input Parameters

- `key` - _required_ - The Ledger Account Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ledger Account Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_ledger_account_types\_\_key*

### x*sage_changelog_ledger_account_types\_\_key*

### Returns all Journals

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Read Only, Full Access<br/>

_Tags:_ `Journals`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Journals changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Journals deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Journals per request.<br/>
- `page` - _optional_ - Go to specific page of Journals<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Journals (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_journals

### x_sage_changelog_journals

### Creates a Journal

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Full Access<br/>

_Tags:_ `Journals`

### Returns a Journal

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Read Only, Full Access<br/>

_Tags:_ `Journals`

#### Input Parameters

- `key` - _required_ - The Journal Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Journal (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Journal (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_journals\_\_key*

### x*sage_changelog_journals\_\_key*

### Deletes a Journal

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Full Access<br/>

_Tags:_ `Journals`

#### Input Parameters

- `key` - _required_ - The Journal Key.<br/>

### Reissues an existing Journal by voiding the existing one and creating a new one

> ### Access Control Restrictions<br/>
>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Full Access<br/>

_Tags:_ `Journals`

#### Input Parameters

- `key` - _required_ - The Journal GUID.<br/>

### Returns all Journal Codes

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Journals`: Full Access, Read Only<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Journal Codes`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Journal Codes changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Journal Codes per request.<br/>
- `page` - _optional_ - Go to specific page of Journal Codes<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Journal Codes (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_journal_codes

### x_sage_changelog_journal_codes

### Creates a Journal Code

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Journal Codes`

### Returns a Journal Code

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Journals`: Full Access, Read Only<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Journal Codes`

#### Input Parameters

- `key` - _required_ - The Journal Code Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Journal Code (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_journal_codes\_\_key*

### x*sage_changelog_journal_codes\_\_key*

### Updates a Journal Code

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Journal Codes`

#### Input Parameters

- `key` - _required_ - The Journal Code Key.<br/>

### Deletes a Journal Code

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Journal Codes`

#### Input Parameters

- `key` - _required_ - The Journal Code Key.<br/>

### Returns all Journal Code Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Journal Code Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Country Journal Types per request.<br/>
- `page` - _optional_ - Go to specific page of Country Journal Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Country Journal Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_journal_code_types

### x_sage_changelog_journal_code_types

### Returns a Journal Code Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Journal Code Types`

#### Input Parameters

- `key` - _required_ - The Journal Code Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Country Journal Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_journal_code_types\_\_key*

### x*sage_changelog_journal_code_types\_\_key*

### Returns all Ledger Entries

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Read Only, Full Access<br/>

_Tags:_ `Ledger Entries`

#### Input Parameters

- `from_date` - _optional_ - Use this to filter by Ledger Entries dates<br/>
- `to_date` - _optional_ - Use this to filter by Ledger Entries dates<br/>
- `transaction_id` - _optional_ - Use this to filter by transaction id<br/>
- `transaction_type_id` - _optional_ - Use this to filter by transaction type id<br/>
- `journal_code_id` - _optional_ - Use this to filter by journal code id<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Ledger Entries changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Ledger Entries per request.<br/>
- `page` - _optional_ - Go to specific page of Ledger Entries<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ledger Entries (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `ledger_account_id` - _optional_ - Use this to filter by ledger account id<br/>

### x_sage_pathtitle_ledger_entries

### x_sage_changelog_ledger_entries

### Returns a Ledger Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Read Only, Full Access<br/>

_Tags:_ `Ledger Entries`

#### Input Parameters

- `key` - _required_ - The Ledger Entry Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Ledger Entry (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ledger Entry (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_ledger_entries\_\_key*

### x*sage_changelog_ledger_entries\_\_key*

### Returns all Transactions

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Read Only, Full Access<br/>

_Tags:_ `Transactions`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Transactions changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `from_date` - _optional_ - Use this to filter by Transactions dates<br/>
- `to_date` - _optional_ - Use this to filter by Transactions dates<br/>
- `updated_from_date` - _optional_ - Use this to filter Transactions by the date they were last updated<br/>
- `updated_to_date` - _optional_ - Use this to filter Transactions by the date they were last updated<br/>
- `has_attachments` - _optional_ - Use this to filter Transactions by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Transactions per request.<br/>
- `page` - _optional_ - Go to specific page of Transactions<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Transactions (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `transaction_type_id` - _optional_ - Use this to filter by transaction type id<br/>

### x_sage_pathtitle_transactions

### x_sage_changelog_transactions

### Returns a Transaction

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Journals`: Read Only, Full Access<br/>

_Tags:_ `Transactions`

#### Input Parameters

- `key` - _required_ - The Transaction Key.<br/>
- `expand_origin` - _optional_
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Transaction (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_transactions\_\_key*

### x*sage_changelog_transactions\_\_key*

### Returns all Transaction Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Transaction Types`

#### Input Parameters

- `valid_for_business` - _optional_ - Use this to filter the transaction types to a business's locale and service<br/>
- `items_per_page` - _optional_ - Returns the given number of Transaction Types per request.<br/>
- `page` - _optional_ - Go to specific page of Transaction Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Transaction Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_transaction_types

### x_sage_changelog_transaction_types

### Returns a Transaction Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Transaction Types`

#### Input Parameters

- `key` - _required_ - The Transaction Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Transaction Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_transaction_types\_\_key*

### x*sage_changelog_transaction_types\_\_key*

### Returns all Attachments

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Attachments`

#### Input Parameters

- `attachment_context_id` - _optional_ - Use this to filter Attachments by attachment_context_id. Requires filtering by attachment_context_type_id as well<br/>
- `attachment_context_type_id` - _optional_ - Use this to filter Attachments by attachment_context_type_id. Requires filtering by attachment_context_id as well<br/>
- `legacy_attachment_context_type` - _optional_
- `legacy_attachment_context_id` - _optional_
- `updated_or_created_since` - _optional_ - Use this to limit the response to Attachments changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Attachments deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Attachments per request.<br/>
- `page` - _optional_ - Go to specific page of Attachments<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Attachments (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_attachments

### x_sage_changelog_attachments

### Creates a Attachment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Restricted Access, Full Access<br/>
> * Area: `Purchases`: Restricted Access, Full Access<br/>

_Tags:_ `Attachments`

### Returns a Attachment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Attachments`

#### Input Parameters

- `key` - _required_ - The Attachment Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Attachment (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_attachments\_\_key*

### x*sage_changelog_attachments\_\_key*

### Updates a Attachment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Restricted Access, Full Access<br/>
> * Area: `Purchases`: Restricted Access, Full Access<br/>

_Tags:_ `Attachments`

#### Input Parameters

- `key` - _required_ - The Attachment Key.<br/>

### Deletes a Attachment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Restricted Access, Full Access<br/>
> * Area: `Purchases`: Restricted Access, Full Access<br/>

_Tags:_ `Attachments`

#### Input Parameters

- `key` - _required_ - The Attachment Key.<br/>

### Returns an Attachment File

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Attachments`

#### Input Parameters

- `Accept` - _required_ - Specify the Accept header of the request.<br/>
  It must always be set to `application/octet-stream` for retrieving files.<br/>
- `key` - _required_ - The Attachment Key.<br/>

### x_sage_pathtitle_attachments**key**file

### x_sage_changelog_attachments**key**file

### Returns all Attachment Context Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Attachment Context Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Attachment Context Types per request.<br/>
- `page` - _optional_ - Go to specific page of Attachment Context Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Attachment Context Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_attachment_context_types

### x_sage_changelog_attachment_context_types

### Returns a Attachment Context Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Attachment Context Types`

#### Input Parameters

- `key` - _required_ - The Attachment Context Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Attachment Context Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_attachment_context_types\_\_key*

### x*sage_changelog_attachment_context_types\_\_key*

### Returns all Bank Accounts

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Bank Accounts`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Bank Accounts changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Bank Accounts deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Bank Accounts (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `exclude_stripe` - _optional_ - Use this to filter out Stripe Bank Accounts<br/>
- `items_per_page` - _optional_ - Returns the given number of Bank Accounts per request.<br/>
- `page` - _optional_ - Go to specific page of Bank Accounts<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Bank Accounts (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_bank_accounts

### x_sage_changelog_bank_accounts

### Creates a Bank Account

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Bank Accounts`

### Returns a Bank Account

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Bank Accounts`

#### Input Parameters

- `key` - _required_ - The Bank Account Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Bank Account (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Bank Account (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_bank_accounts\_\_key*

### x*sage_changelog_bank_accounts\_\_key*

### Updates a Bank Account

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Bank Accounts`

#### Input Parameters

- `key` - _required_ - The Bank Account Key.<br/>

### Deletes a Bank Account

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Bank Accounts`

#### Input Parameters

- `key` - _required_ - The Bank Account Key.<br/>

### Returns all Bank Account Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Bank Account Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Account Types per request.<br/>
- `page` - _optional_ - Go to specific page of Account Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Account Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_bank_account_types

### x_sage_changelog_bank_account_types

### Returns a Bank Account Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Bank Account Types`

#### Input Parameters

- `key` - _required_ - The Bank Account Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Account Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_bank_account_types\_\_key*

### x*sage_changelog_bank_account_types\_\_key*

### Returns all Bank Deposits

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Bank Deposits`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Deposits changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Deposits deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `from_date` - _optional_ - Use this to filter by Deposits dates<br/>
- `to_date` - _optional_ - Use this to filter by Deposits dates<br/>
- `items_per_page` - _optional_ - Returns the given number of Deposits per request.<br/>
- `page` - _optional_ - Go to specific page of Deposits<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Deposits (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_bank_deposits

### x_sage_changelog_bank_deposits

### Creates a Bank Deposit

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Bank Deposits`

### Returns a Bank Deposit

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Bank Deposits`

#### Input Parameters

- `key` - _required_ - The Bank Deposit Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Deposit (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Deposit (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_bank_deposits\_\_key*

### x*sage_changelog_bank_deposits\_\_key*

### Deletes a Bank Deposit

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Bank Deposits`

#### Input Parameters

- `key` - _required_ - The Bank Deposit Key.<br/>

### Returns all Bank Reconciliations

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Bank Reconciliations`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Bank Reconciliations changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `bank_account_id` - _optional_ - Use this to filter by bank account id<br/>
- `items_per_page` - _optional_ - Returns the given number of Bank Reconciliations per request.<br/>
- `page` - _optional_ - Go to specific page of Bank Reconciliations<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Bank Reconciliations (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_bank_reconciliations

### x_sage_changelog_bank_reconciliations

### Creates a Bank Reconciliation

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Bank Reconciliations`

### Returns a Bank Reconciliation

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Bank Reconciliations`

#### Input Parameters

- `key` - _required_ - The Bank Reconciliation Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Bank Reconciliation (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_bank_reconciliations\_\_key*

### x*sage_changelog_bank_reconciliations\_\_key*

### Updates a Bank Reconciliation

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Bank Reconciliations`

#### Input Parameters

- `key` - _required_ - The Bank Reconciliation Key.<br/>

### Returns all Bank Transfers

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Bank Transfers`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Bank Transfers changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Bank Transfers deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `from_date` - _optional_ - Use this to filter by Bank Transfers dates<br/>
- `to_date` - _optional_ - Use this to filter by Bank Transfers dates<br/>
- `items_per_page` - _optional_ - Returns the given number of Bank Transfers per request.<br/>
- `page` - _optional_ - Go to specific page of Bank Transfers<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Bank Transfers (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_bank_transfers

### x_sage_changelog_bank_transfers

### Creates a Bank Transfer

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access, Restricted Access<br/>

_Tags:_ `Bank Transfers`

### Returns a Bank Transfer

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Bank Transfers`

#### Input Parameters

- `key` - _required_ - The Bank Transfer Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Bank Transfer (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Bank Transfer (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_bank_transfers\_\_key*

### x*sage_changelog_bank_transfers\_\_key*

### Updates a Bank Transfer

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access, Restricted Access<br/>

_Tags:_ `Bank Transfers`

#### Input Parameters

- `key` - _required_ - The Bank Transfer Key.<br/>

### Deletes a Bank Transfer

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Bank Transfers`

#### Input Parameters

- `key` - _required_ - The Bank Transfer Key.<br/>

### Returns all Addresses

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Addresses`

#### Input Parameters

- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `bank_account_id` - _optional_ - Use this to filter by bank account id<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Addresses changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Addresses deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Addresses per request.<br/>
- `page` - _optional_ - Go to specific page of Addresses<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Addresses (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_addresses

### x_sage_changelog_addresses

### Creates a Address

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Restricted Access, Full Access<br/>

_Tags:_ `Addresses`

### Returns a Address

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Addresses`

#### Input Parameters

- `key` - _required_ - The Address Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Address (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Address (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_addresses\_\_key*

### x*sage_changelog_addresses\_\_key*

### Updates a Address

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Restricted Access, Full Access<br/>

_Tags:_ `Addresses`

#### Input Parameters

- `key` - _required_ - The Address Key.<br/>

### Deletes a Address

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Full Access<br/>

_Tags:_ `Addresses`

#### Input Parameters

- `key` - _required_ - The Address Key.<br/>

### Returns all Address Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Address Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Address Types per request.<br/>
- `page` - _optional_ - Go to specific page of Address Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Address Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_address_types

### x_sage_changelog_address_types

### Returns a Address Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Address Types`

#### Input Parameters

- `key` - _required_ - The Address Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Address Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_address_types\_\_key*

### x*sage_changelog_address_types\_\_key*

### Returns all Address Regions

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Address Regions`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of States per request.<br/>
- `page` - _optional_ - Go to specific page of States<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the States (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `country_id` - _optional_ - Use this to filter by country id<br/>

### x_sage_pathtitle_address_regions

### x_sage_changelog_address_regions

### Returns a Address Region

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Address Regions`

#### Input Parameters

- `key` - _required_ - The Address Region Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the State (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_address_regions\_\_key*

### x*sage_changelog_address_regions\_\_key*

### Returns all Contacts

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Contacts`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Contacts changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Contacts deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `contact_type_id` - _optional_ - Use this to filter by contact type id<br/>
- `exclude_system` - _optional_ - Use this to filter out system entities, not applicable for transaction creation<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Contacts (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `show_balance` - _optional_ - Use this to display the balance for a contact.<br/>
- `context_date` - _optional_ - Use this to determine the correct tax treatment for a contact on a given date.<br/>
- `search` - _optional_ - Use this to filter by the contact name, company name or reference.<br/>
- `email` - _optional_ - Use this to filter by the contact person email address.<br/>
- `show_unfinished_recurring_invoices_status` - _optional_
- `items_per_page` - _optional_ - Returns the given number of Contacts per request.<br/>
- `page` - _optional_ - Go to specific page of Contacts<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Contacts (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_contacts

### x_sage_changelog_contacts

### Creates a Contact

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Restricted Access, Full Access<br/>

_Tags:_ `Contacts`

### Returns a Contact

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Contacts`

#### Input Parameters

- `key` - _required_ - The Contact Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Contact (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `show_balance` - _optional_ - Use this to display the balance for a contact.<br/>
- `context_date` - _optional_ - Use this to determine the correct tax treatment for a contact on a given date.<br/>
- `show_unfinished_recurring_invoices_status` - _optional_
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Contact (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_contacts\_\_key*

### x*sage_changelog_contacts\_\_key*

### Updates a Contact

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Restricted Access, Full Access<br/>

_Tags:_ `Contacts`

#### Input Parameters

- `key` - _required_ - The Contact Key.<br/>

### Deletes a Contact

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Full Access<br/>

_Tags:_ `Contacts`

#### Input Parameters

- `key` - _required_ - The Contact Key.<br/>

### Returns all Contact Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Contact Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Contact Types per request.<br/>
- `page` - _optional_ - Go to specific page of Contact Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Contact Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_contact_types

### x_sage_changelog_contact_types

### Returns a Contact Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Contact Types`

#### Input Parameters

- `key` - _required_ - The Contact Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Contact Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_contact_types\_\_key*

### x*sage_changelog_contact_types\_\_key*

### Returns all Contact People

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Contact People`

#### Input Parameters

- `address_id` - _optional_ - Use this to filter by address id<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Address Contacts changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Address Contacts deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `items_per_page` - _optional_ - Returns the given number of Address Contacts per request.<br/>
- `page` - _optional_ - Go to specific page of Address Contacts<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Address Contacts (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_contact_persons

### x_sage_changelog_contact_persons

### Creates a Contact Person

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Restricted Access, Full Access<br/>

_Tags:_ `Contact People`

### Returns a Contact Person

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Contact People`

#### Input Parameters

- `key` - _required_ - The Contact Person Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Address Contact (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Address Contact (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_contact_persons\_\_key*

### x*sage_changelog_contact_persons\_\_key*

### Updates a Contact Person

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Restricted Access, Full Access<br/>

_Tags:_ `Contact People`

#### Input Parameters

- `key` - _required_ - The Contact Person Key.<br/>

### Deletes a Contact Person

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Contacts`: Full Access<br/>

_Tags:_ `Contact People`

#### Input Parameters

- `key` - _required_ - The Contact Person Key.<br/>

### Returns all Contact Person Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Contact Person Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Contact Types per request.<br/>
- `page` - _optional_ - Go to specific page of Contact Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Contact Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_contact_person_types

### x_sage_changelog_contact_person_types

### Returns a Contact Person Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Contact Person Types`

#### Input Parameters

- `key` - _required_ - The Contact Person Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Contact Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_contact_person_types\_\_key*

### x*sage_changelog_contact_person_types\_\_key*

### Returns all Countries

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Countries`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Countries per request.<br/>
- `page` - _optional_ - Go to specific page of Countries<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Countries (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_countries

### x_sage_changelog_countries

### Returns a Country

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Countries`

#### Input Parameters

- `key` - _required_ - The Country Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Country (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_countries\_\_key*

### x*sage_changelog_countries\_\_key*

### Returns all Country Groups

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Country Groups`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Country Groups per request.<br/>
- `page` - _optional_ - Go to specific page of Country Groups<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Country Groups (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_country_groups

### x_sage_changelog_country_groups

### Returns a Country Group

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Country Groups`

#### Input Parameters

- `key` - _required_ - The Country Group Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Country Group (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_country_groups\_\_key*

### x*sage_changelog_country_groups\_\_key*

### Returns all Business Exchange Rates

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access, Read Only<br/>

_Tags:_ `Business Exchange Rates`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Business Exchange Rates per request.<br/>
- `page` - _optional_ - Go to specific page of Business Exchange Rates<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Business Exchange Rates (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_business_exchange_rates

### x_sage_changelog_business_exchange_rates

### Creates a Business Exchange Rate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access<br/>

_Tags:_ `Business Exchange Rates`

### Returns a Business Exchange Rate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access, Read Only<br/>

_Tags:_ `Business Exchange Rates`

#### Input Parameters

- `key` - _required_ - The Business Exchange Rate Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Business Exchange Rate (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_business_exchange_rates\_\_key*

### x*sage_changelog_business_exchange_rates\_\_key*

### Updates a Business Exchange Rate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access<br/>

_Tags:_ `Business Exchange Rates`

#### Input Parameters

- `key` - _required_ - The Business Exchange Rate Key.<br/>

### Deletes a Business Exchange Rate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access<br/>

_Tags:_ `Business Exchange Rates`

#### Input Parameters

- `key` - _required_ - The Business Exchange Rate Key.<br/>

### Returns all Currencies

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Currencies`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Currencies per request.<br/>
- `page` - _optional_ - Go to specific page of Currencies<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Currencies (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_currencies

### x_sage_changelog_currencies

### Returns a Currency

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Currencies`

#### Input Parameters

- `key` - _required_ - The Currency Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Currency (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_currencies\_\_key*

### x*sage_changelog_currencies\_\_key*

### Returns all Exchange Rates

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Exchange Rates`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Currencies per request.<br/>
- `page` - _optional_ - Go to specific page of Currencies<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Currencies (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_exchange_rates

### x_sage_changelog_exchange_rates

### Returns a Exchange Rate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Exchange Rates`

#### Input Parameters

- `key` - _required_ - The Exchange Rate Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Currency (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_exchange_rates\_\_key*

### x*sage_changelog_exchange_rates\_\_key*

### Returns all Live Exchange Rates

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Live Exchange Rates`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Currencies per request.<br/>
- `page` - _optional_ - Go to specific page of Currencies<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Currencies (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_live_exchange_rates

### x_sage_changelog_live_exchange_rates

### Returns a Live Exchange Rate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Live Exchange Rates`

#### Input Parameters

- `key` - _required_ - The Live Exchange Rate Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Currency (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_live_exchange_rates\_\_key*

### x*sage_changelog_live_exchange_rates\_\_key*

### Returns all Corrective Reason Codes

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start:<br/>

_Tags:_ `Corrective Reason Codes`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Corrective Reason Codes per request.<br/>
- `page` - _optional_ - Go to specific page of Corrective Reason Codes<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Corrective Reason Codes (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_corrective_reason_codes

### x_sage_changelog_corrective_reason_codes

### Returns a Corrective Reason Code

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start:<br/>

_Tags:_ `Corrective Reason Codes`

#### Input Parameters

- `key` - _required_ - The Corrective Reason Code Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Corrective Reason Code (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_corrective_reason_codes\_\_key*

### x*sage_changelog_corrective_reason_codes\_\_key*

### Returns all Quick Entry Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Quick Entry Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Batch Entry Types per request.<br/>
- `page` - _optional_ - Go to specific page of Batch Entry Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Batch Entry Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_quick_entry_types

### x_sage_changelog_quick_entry_types

### Returns a Quick Entry Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Quick Entry Types`

#### Input Parameters

- `key` - _required_ - The Quick Entry Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Batch Entry Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_quick_entry_types\_\_key*

### x*sage_changelog_quick_entry_types\_\_key*

### Returns all Artefact Statuses

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Artefact Statuses`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Artefact Statuses per request.<br/>
- `page` - _optional_ - Go to specific page of Artefact Statuses<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Artefact Statuses (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_artefact_statuses

### x_sage_changelog_artefact_statuses

### Returns a Artefact Status

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Artefact Statuses`

#### Input Parameters

- `key` - _required_ - The Artefact Status Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Artefact Status (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_artefact_statuses\_\_key*

### x*sage_changelog_artefact_statuses\_\_key*

### Returns all EU Goods Services Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `EU Goods Services Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of EU Goods Services Types per request.<br/>
- `page` - _optional_ - Go to specific page of EU Goods Services Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the EU Goods Services Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_eu_goods_services_types

### x_sage_changelog_eu_goods_services_types

### Returns a EU Goods Services Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `EU Goods Services Types`

#### Input Parameters

- `key` - _required_ - The EU Goods Services Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the EU Goods Services Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_eu_goods_services_types\_\_key*

### x*sage_changelog_eu_goods_services_types\_\_key*

### Returns all Purchase Corrective Invoices

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Purchase Corrective Invoices`

#### Input Parameters

- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `search` - _optional_ - Use this to filter by the invoice reference or contact name.<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Purchase Corrective Invoices dates<br/>
- `to_date` - _optional_ - Use this to filter by Purchase Corrective Invoices dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Purchase Corrective Invoices changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Purchase Corrective Invoices deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `has_attachments` - _optional_ - Use this to filter Purchase Corrective Invoices by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Purchase Corrective Invoices per request.<br/>
- `page` - _optional_ - Go to specific page of Purchase Corrective Invoices<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Purchase Corrective Invoices (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date, due_date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_purchase_corrective_invoices

### x_sage_changelog_purchase_corrective_invoices

### Creates a Purchase Corrective Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Corrective Invoices`

### Returns a Purchase Corrective Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Purchase Corrective Invoices`

#### Input Parameters

- `key` - _required_ - The Purchase Corrective Invoice Key.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Purchase Corrective Invoice (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Purchase Corrective Invoice (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_purchase_corrective_invoices\_\_key*

### x*sage_changelog_purchase_corrective_invoices\_\_key*

### Updates a Purchase Corrective Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Corrective Invoices`

#### Input Parameters

- `key` - _required_ - The Purchase Corrective Invoice Key.<br/>

### Deletes a Purchase Corrective Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access<br/>

_Tags:_ `Purchase Corrective Invoices`

#### Input Parameters

- `key` - _required_ - The Purchase Corrective Invoice Key.<br/>

### Returns all Purchase Credit Notes

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Standard: , , , , , <br/>
> * Accounting Start: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Purchase Credit Notes`

#### Input Parameters

- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `search` - _optional_ - Use this to filter by the credit note reference or contact name.<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Purchase Credit Notes dates<br/>
- `to_date` - _optional_ - Use this to filter by Purchase Credit Notes dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Purchase Credit Notes changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Purchase Credit Notes deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `has_attachments` - _optional_ - Use this to filter Purchase Credit Notes by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Purchase Credit Notes per request.<br/>
- `page` - _optional_ - Go to specific page of Purchase Credit Notes<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Purchase Credit Notes (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_purchase_credit_notes

### x_sage_changelog_purchase_credit_notes

### Creates a Purchase Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Credit Notes`

### Returns a Purchase Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Standard: , , , , , <br/>
> * Accounting Start: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Purchase Credit Notes`

#### Input Parameters

- `key` - _required_ - The Purchase Credit Note Key.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Purchase Credit Note (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Purchase Credit Note (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_purchase_credit_notes\_\_key*

### x*sage_changelog_purchase_credit_notes\_\_key*

### Updates a Purchase Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Credit Notes`

#### Input Parameters

- `key` - _required_ - The Purchase Credit Note Key.<br/>

### Deletes a Purchase Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access<br/>

_Tags:_ `Purchase Credit Notes`

#### Input Parameters

- `key` - _required_ - The Purchase Credit Note Key.<br/>

### Releases a Purchase Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Credit Notes`

#### Input Parameters

- `key` - _required_ - The Purchase Credit Note Key.<br/>

### Returns all Purchase Invoices

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Purchase Invoices`

#### Input Parameters

- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `search` - _optional_ - Use this to filter by the invoice reference or contact name.<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Purchase Invoices dates<br/>
- `to_date` - _optional_ - Use this to filter by Purchase Invoices dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Purchase Invoices changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Purchase Invoices deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `has_attachments` - _optional_ - Use this to filter Purchase Invoices by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Purchase Invoices per request.<br/>
- `page` - _optional_ - Go to specific page of Purchase Invoices<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Purchase Invoices (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date, due_date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_purchase_invoices

### x_sage_changelog_purchase_invoices

### Creates a Purchase Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Invoices`

### Returns a Purchase Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Purchase Invoices`

#### Input Parameters

- `key` - _required_ - The Purchase Invoice Key.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `show_corrections` - _optional_ - Use this to show the artefact's associated corrections<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Purchase Invoice (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Purchase Invoice (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_purchase_invoices\_\_key*

### x*sage_changelog_purchase_invoices\_\_key*

### Updates a Purchase Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Invoices`

#### Input Parameters

- `key` - _required_ - The Purchase Invoice Key.<br/>

### Deletes a Purchase Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access<br/>

_Tags:_ `Purchase Invoices`

#### Input Parameters

- `key` - _required_ - The Purchase Invoice Key.<br/>

### Releases a Purchase Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Invoices`

#### Input Parameters

- `key` - _required_ - The Purchase Invoice Key.<br/>

### Returns all Purchase Quick Entries

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Purchase Quick Entries`

#### Input Parameters

- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `search` - _optional_ - Use this to filter by the quick entry reference or contact name.<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Purchase Batch Entries dates<br/>
- `to_date` - _optional_ - Use this to filter by Purchase Batch Entries dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Purchase Batch Entries changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Purchase Batch Entries deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `has_attachments` - _optional_ - Use this to filter Purchase Batch Entries by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Purchase Batch Entries per request.<br/>
- `page` - _optional_ - Go to specific page of Purchase Batch Entries<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Purchase Batch Entries (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_purchase_quick_entries

### x_sage_changelog_purchase_quick_entries

### Creates a Purchase Quick Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Quick Entries`

### Returns a Purchase Quick Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Purchase Quick Entries`

#### Input Parameters

- `key` - _required_ - The Purchase Quick Entry Key.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Purchase Batch Entry (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Purchase Batch Entry (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_purchase_quick_entries\_\_key*

### x*sage_changelog_purchase_quick_entries\_\_key*

### Updates a Purchase Quick Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access, Restricted Access<br/>

_Tags:_ `Purchase Quick Entries`

#### Input Parameters

- `key` - _required_ - The Purchase Quick Entry Key.<br/>

### Deletes a Purchase Quick Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Purchases`: Full Access<br/>

_Tags:_ `Purchase Quick Entries`

#### Input Parameters

- `key` - _required_ - The Purchase Quick Entry Key.<br/>

### Returns all Sales Corrective Invoices

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Corrective Invoices`

#### Input Parameters

- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `search` - _optional_ - Use this to filter by the invoice reference or contact name.<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Sales Corrective Invoices dates<br/>
- `to_date` - _optional_ - Use this to filter by Sales Corrective Invoices dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Sales Corrective Invoices changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Sales Corrective Invoices deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `has_attachments` - _optional_ - Use this to filter Sales Corrective Invoices by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Sales Corrective Invoices per request.<br/>
- `page` - _optional_ - Go to specific page of Sales Corrective Invoices<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Corrective Invoices (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date, due_date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_sales_corrective_invoices

### x_sage_changelog_sales_corrective_invoices

### Creates a Sales Corrective Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Corrective Invoices`

### Returns a Sales Corrective Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Corrective Invoices`

#### Input Parameters

- `key` - _required_ - The Sales Corrective Invoice Key.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Sales Corrective Invoice (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `mark_as_sent` - _optional_ - Use this to mark/not mark the artefact as sent. Defaulted to 'true'.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Corrective Invoice (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_sales_corrective_invoices\_\_key*

### x*sage_changelog_sales_corrective_invoices\_\_key*

### Updates a Sales Corrective Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Corrective Invoices`

#### Input Parameters

- `key` - _required_ - The Sales Corrective Invoice Key.<br/>

### Voids a Sales Corrective Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access<br/>

_Tags:_ `Sales Corrective Invoices`

#### Input Parameters

- `key` - _required_ - The Sales Corrective Invoice Key.<br/>
- `void_reason` - _optional_ - The reason the Sales Corrective Invoice is being voided (required unless status is DRAFT).<br/>

### Returns all EU Sales Descriptions

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `EU Sales Descriptions`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Ec Sales Descriptions per request.<br/>
- `page` - _optional_ - Go to specific page of Ec Sales Descriptions<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ec Sales Descriptions (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_eu_sales_descriptions

### x_sage_changelog_eu_sales_descriptions

### Returns a EU Sales Description

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `EU Sales Descriptions`

#### Input Parameters

- `key` - _required_ - The EU Sales Description Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Ec Sales Description (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_eu_sales_descriptions\_\_key*

### x*sage_changelog_eu_sales_descriptions\_\_key*

### Returns all Sales Credit Notes

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Standard: , , , , , <br/>
> * Accounting Start: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Credit Notes`

#### Input Parameters

- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `search` - _optional_ - Use this to filter by the credit note reference or contact name.<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Sales Credit Notes dates<br/>
- `to_date` - _optional_ - Use this to filter by Sales Credit Notes dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Sales Credit Notes changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Sales Credit Notes deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `has_attachments` - _optional_ - Use this to filter Sales Credit Notes by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Sales Credit Notes per request.<br/>
- `page` - _optional_ - Go to specific page of Sales Credit Notes<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Credit Notes (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_sales_credit_notes

### x_sage_changelog_sales_credit_notes

### Creates a Sales Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Credit Notes`

### Returns a Sales Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Standard: , , , , , <br/>
> * Accounting Start: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Credit Notes`

#### Input Parameters

- `key` - _required_ - The Sales Credit Note Key.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Sales Credit Note (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `mark_as_sent` - _optional_ - Use this to mark/not mark the artefact as sent. Defaulted to 'true'.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Credit Note (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_sales_credit_notes\_\_key*

### x*sage_changelog_sales_credit_notes\_\_key*

### Updates a Sales Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Credit Notes`

#### Input Parameters

- `key` - _required_ - The Sales Credit Note Key.<br/>

### Voids a Sales Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access<br/>

_Tags:_ `Sales Credit Notes`

#### Input Parameters

- `key` - _required_ - The Sales Credit Note Key.<br/>
- `void_reason` - _optional_ - The reason the Sales Credit Note is being voided (required unless status is DRAFT).<br/>

### Releases a Sales Credit Note

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Credit Notes`

#### Input Parameters

- `key` - _required_ - The Sales Credit Note Key.<br/>

### Returns all Sales Estimates

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Standard: , , , , , <br/>
> * Accounting Start: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Estimates`

#### Input Parameters

- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `search` - _optional_ - Use this to filter by the estimate reference or contact name.<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Sales Estimates dates<br/>
- `to_date` - _optional_ - Use this to filter by Sales Estimates dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Sales Estimates changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `has_attachments` - _optional_ - Use this to filter Sales Estimates by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Sales Estimates per request.<br/>
- `page` - _optional_ - Go to specific page of Sales Estimates<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Estimates (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_sales_estimates

### x_sage_changelog_sales_estimates

### Creates a Sales Estimate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Estimates`

### Returns a Sales Estimate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Standard: , , , , , <br/>
> * Accounting Start: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Estimates`

#### Input Parameters

- `key` - _required_ - The Sales Estimate Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Sales Estimate (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Estimate (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_sales_estimates\_\_key*

### x*sage_changelog_sales_estimates\_\_key*

### Updates a Sales Estimate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Estimates`

#### Input Parameters

- `key` - _required_ - The Sales Estimate Key.<br/>

### Deletes a Sales Estimate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access<br/>

_Tags:_ `Sales Estimates`

#### Input Parameters

- `key` - _required_ - The Sales Estimate Key.<br/>

### Returns all Sales Invoices

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Invoices`

#### Input Parameters

- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `search` - _optional_ - Use this to filter by the invoice reference or contact name.<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Sales Invoices dates<br/>
- `to_date` - _optional_ - Use this to filter by Sales Invoices dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Sales Invoices changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Sales Invoices deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `has_attachments` - _optional_ - Use this to filter Sales Invoices by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Sales Invoices per request.<br/>
- `page` - _optional_ - Go to specific page of Sales Invoices<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Invoices (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date, due_date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_sales_invoices

### x_sage_changelog_sales_invoices

### Creates a Sales Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Invoices`

### Returns a Sales Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Invoices`

#### Input Parameters

- `key` - _required_ - The Sales Invoice Key.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `show_corrections` - _optional_ - Use this to show the artefact's associated corrections<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Sales Invoice (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `mark_as_sent` - _optional_ - Use this to mark/not mark the artefact as sent. Defaulted to 'true'.<br/>
- `show_recurring_invoice` - _optional_ - Use this to show the artefact's associated recurring invoice template if present<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Invoice (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_sales_invoices\_\_key*

### x*sage_changelog_sales_invoices\_\_key*

### Updates a Sales Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Invoices`

#### Input Parameters

- `key` - _required_ - The Sales Invoice Key.<br/>

### Voids a Sales Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access<br/>

_Tags:_ `Sales Invoices`

#### Input Parameters

- `key` - _required_ - The Sales Invoice Key.<br/>
- `void_reason` - _optional_ - The reason the Sales Invoice is being voided (required unless status is DRAFT).<br/>

### Releases a Sales Invoice

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Invoices`

#### Input Parameters

- `key` - _required_ - The Sales Invoice Key.<br/>

### Returns all Sales Quick Entries

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Quick Entries`

#### Input Parameters

- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `search` - _optional_ - Use this to filter by the quick entry reference or contact name.<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Sales Batch Entries dates<br/>
- `to_date` - _optional_ - Use this to filter by Sales Batch Entries dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Sales Batch Entries changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Sales Batch Entries deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `has_attachments` - _optional_ - Use this to filter Sales Batch Entries by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Sales Batch Entries per request.<br/>
- `page` - _optional_ - Go to specific page of Sales Batch Entries<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Batch Entries (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_sales_quick_entries

### x_sage_changelog_sales_quick_entries

### Creates a Sales Quick Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Quick Entries`

### Returns a Sales Quick Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Quick Entries`

#### Input Parameters

- `key` - _required_ - The Sales Quick Entry Key.<br/>
- `show_payments_allocations` - _optional_ - Use this to show the artefact's payments and allocations<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Sales Batch Entry (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Batch Entry (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_sales_quick_entries\_\_key*

### x*sage_changelog_sales_quick_entries\_\_key*

### Updates a Sales Quick Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Quick Entries`

#### Input Parameters

- `key` - _required_ - The Sales Quick Entry Key.<br/>

### Deletes a Sales Quick Entry

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access<br/>

_Tags:_ `Sales Quick Entries`

#### Input Parameters

- `key` - _required_ - The Sales Quick Entry Key.<br/>

### Returns all Sales Quotes

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Quotes`

#### Input Parameters

- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `search` - _optional_ - Use this to filter by the quote reference or contact name.<br/>
- `status_id` - _optional_ - Use this to filter by status id<br/>
- `from_date` - _optional_ - Use this to filter by Sales Quotes dates<br/>
- `to_date` - _optional_ - Use this to filter by Sales Quotes dates<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Sales Quotes changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `has_attachments` - _optional_ - Use this to filter Sales Quotes by whether they have attachments or not<br/>
- `items_per_page` - _optional_ - Returns the given number of Sales Quotes per request.<br/>
- `page` - _optional_ - Go to specific page of Sales Quotes<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Quotes (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date, expiry_date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_sales_quotes

### x_sage_changelog_sales_quotes

### Creates a Sales Quote

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Quotes`

### Returns a Sales Quote

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Sales Quotes`

#### Input Parameters

- `key` - _required_ - The Sales Quote Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Sales Quote (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Sales Quote (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_sales_quotes\_\_key*

### x*sage_changelog_sales_quotes\_\_key*

### Updates a Sales Quote

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Sales Quotes`

#### Input Parameters

- `key` - _required_ - The Sales Quote Key.<br/>

### Deletes a Sales Quote

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access<br/>

_Tags:_ `Sales Quotes`

#### Input Parameters

- `key` - _required_ - The Sales Quote Key.<br/>

### Returns all Hosted Artefact Payment Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Hosted Artefact Payment Settings`

#### Input Parameters

- `object_guid` - _optional_ - Use this to filter out hosted artefact payment settings by the guid of the object it is associated to.<br/>
- `items_per_page` - _optional_ - Returns the given number of Hosted Artefact Payment Settings per request.<br/>
- `page` - _optional_ - Go to specific page of Hosted Artefact Payment Settings<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Hosted Artefact Payment Settings (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_hosted_artefact_payment_settings

### x_sage_changelog_hosted_artefact_payment_settings

### Creates a Hosted Artefact Payment Setting

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Restricted Access<br/>

_Tags:_ `Hosted Artefact Payment Settings`

### Returns a Hosted Artefact Payment Setting

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access, Read Only, Restricted Access<br/>

_Tags:_ `Hosted Artefact Payment Settings`

#### Input Parameters

- `key` - _required_ - The Hosted Artefact Payment Setting Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Hosted Artefact Payment Setting (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_hosted_artefact_payment_settings\_\_key*

### x*sage_changelog_hosted_artefact_payment_settings\_\_key*

### Deletes a Hosted Artefact Payment Setting

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Sales`: Full Access<br/>

_Tags:_ `Hosted Artefact Payment Settings`

#### Input Parameters

- `key` - _required_ - The Hosted Artefact Payment Setting Key.<br/>

### Returns all Contact Opening Balances

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings`, `Sales`, and `Purchases`: Full Access, Read Only<br/>

_Tags:_ `Contact Opening Balances`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Batch Entries changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Batch Entries deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `contact_type_id` - _optional_ - Use this to filter by contact type id<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `items_per_page` - _optional_ - Returns the given number of Batch Entries per request.<br/>
- `page` - _optional_ - Go to specific page of Batch Entries<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Batch Entries (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_contact_opening_balances

### x_sage_changelog_contact_opening_balances

### Creates a Contact Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings`, `Sales`, and `Purchases`: Full Access<br/>

_Tags:_ `Contact Opening Balances`

### Returns a Contact Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings`, `Sales`, and `Purchases`: Full Access, Read Only<br/>

_Tags:_ `Contact Opening Balances`

#### Input Parameters

- `key` - _required_ - The Contact Opening Balance Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Batch Entry (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_contact_opening_balances\_\_key*

### x*sage_changelog_contact_opening_balances\_\_key*

### Updates a Contact Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings`, `Sales`, and `Purchases`: Full Access<br/>

_Tags:_ `Contact Opening Balances`

#### Input Parameters

- `key` - _required_ - The Contact Opening Balance Key.<br/>

### Deletes a Contact Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings`, `Sales`, and `Purchases`: Full Access<br/>

_Tags:_ `Contact Opening Balances`

#### Input Parameters

- `key` - _required_ - The Contact Opening Balance Key.<br/>

### Returns all Contact Opening Balance Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Contact Opening Balance Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Batch Entry Types per request.<br/>
- `page` - _optional_ - Go to specific page of Batch Entry Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Batch Entry Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_contact_opening_balance_types

### x_sage_changelog_contact_opening_balance_types

### Returns a Contact Opening Balance Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Contact Opening Balance Types`

#### Input Parameters

- `key` - _required_ - The Contact Opening Balance Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Batch Entry Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_contact_opening_balance_types\_\_key*

### x*sage_changelog_contact_opening_balance_types\_\_key*

### Returns all Bank Opening Balances

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings` and `Bank`: Full Access, Read Only<br/>

_Tags:_ `Bank Opening Balances`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Bank Opening Balances changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `bank_account_id` - _optional_ - Use this to filter by bank account id<br/>
- `items_per_page` - _optional_ - Returns the given number of Bank Opening Balances per request.<br/>
- `page` - _optional_ - Go to specific page of Bank Opening Balances<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Bank Opening Balances (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_bank_opening_balances

### x_sage_changelog_bank_opening_balances

### Creates a Bank Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings` and `Bank`: Full Access<br/>

_Tags:_ `Bank Opening Balances`

### Returns a Bank Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings` and `Bank`: Full Access, Read Only<br/>

_Tags:_ `Bank Opening Balances`

#### Input Parameters

- `key` - _required_ - The Bank Opening Balance Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Bank Opening Balance (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_bank_opening_balances\_\_key*

### x*sage_changelog_bank_opening_balances\_\_key*

### Updates a Bank Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings` and `Bank`: Full Access<br/>

_Tags:_ `Bank Opening Balances`

#### Input Parameters

- `key` - _required_ - The Bank Opening Balance Key.<br/>

### Deletes a Bank Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Settings` and `Bank`: Full Access<br/>

_Tags:_ `Bank Opening Balances`

#### Input Parameters

- `key` - _required_ - The Bank Opening Balance Key.<br/>

### Returns all Ledger Account Opening Balances

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access, Read Only<br/>

_Tags:_ `Ledger Account Opening Balances`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Journal Opening Balance Lines changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Journal Opening Balance Lines per request.<br/>
- `page` - _optional_ - Go to specific page of Journal Opening Balance Lines<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Journal Opening Balance Lines (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_ledger_account_opening_balances

### x_sage_changelog_ledger_account_opening_balances

### Creates a Ledger Account Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access<br/>

_Tags:_ `Ledger Account Opening Balances`

### Returns a Ledger Account Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access, Read Only<br/>

_Tags:_ `Ledger Account Opening Balances`

#### Input Parameters

- `key` - _required_ - The Ledger Account Opening Balance Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Journal Opening Balance Line (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_ledger_account_opening_balances\_\_key*

### x*sage_changelog_ledger_account_opening_balances\_\_key*

### Updates a Ledger Account Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access<br/>

_Tags:_ `Ledger Account Opening Balances`

#### Input Parameters

- `key` - _required_ - The Ledger Account Opening Balance Key.<br/>

### Deletes a Ledger Account Opening Balance

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access<br/>

_Tags:_ `Ledger Account Opening Balances`

#### Input Parameters

- `key` - _required_ - The Ledger Account Opening Balance Key.<br/>

### Returns all Opening Balance Journals

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access, Read Only<br/>

_Tags:_ `Opening Balance Journals`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Journal Opening Balances per request.<br/>
- `page` - _optional_ - Go to specific page of Journal Opening Balances<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Journal Opening Balances (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_opening_balance_journals

### x_sage_changelog_opening_balance_journals

### Creates a Opening Balance Journal

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access<br/>

_Tags:_ `Opening Balance Journals`

### Returns a Opening Balance Journal

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access, Read Only<br/>

_Tags:_ `Opening Balance Journals`

#### Input Parameters

- `key` - _required_ - The Opening Balance Journal Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Journal Opening Balance (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_opening_balance_journals\_\_key*

### x*sage_changelog_opening_balance_journals\_\_key*

### Deletes a Opening Balance Journal

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, `Contacts`, `Journals`, `Settings`, `Bank`, `Statutory Reporting`, `Products & Services`, and `Reporting`: Full Access<br/>

_Tags:_ `Opening Balance Journals`

#### Input Parameters

- `key` - _required_ - The Opening Balance Journal Key.<br/>

### Returns all Contact Allocations

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, and `Contacts`: Full Access<br/>

_Tags:_ `Contact Allocations`

#### Input Parameters

- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `transaction_type_id` - _optional_ - Use this to filter by transaction type id<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Allocations changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Allocations deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Allocations per request.<br/>
- `page` - _optional_ - Go to specific page of Allocations<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Allocations (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_contact_allocations

### x_sage_changelog_contact_allocations

### Creates a Contact Allocation

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, and `Contacts`: Full Access<br/>

_Tags:_ `Contact Allocations`

### Returns a Contact Allocation

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, and `Contacts`: Full Access<br/>

_Tags:_ `Contact Allocations`

#### Input Parameters

- `key` - _required_ - The Contact Allocation Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Allocation (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_contact_allocations\_\_key*

### x*sage_changelog_contact_allocations\_\_key*

### Updates a Contact Allocation

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, and `Contacts`: Full Access<br/>

_Tags:_ `Contact Allocations`

#### Input Parameters

- `key` - _required_ - The Contact Allocation Key.<br/>

### Deletes a Contact Allocation

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the areas `Sales`, `Purchases`, and `Contacts`: Full Access<br/>

_Tags:_ `Contact Allocations`

#### Input Parameters

- `key` - _required_ - The Contact Allocation Key.<br/>

### Returns all Payment Methods

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Payment Methods`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Payment Types per request.<br/>
- `page` - _optional_ - Go to specific page of Payment Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Payment Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_payment_methods

### x_sage_changelog_payment_methods

### Returns a Payment Method

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Payment Methods`

#### Input Parameters

- `key` - _required_ - The Payment Method Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Payment Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_payment_methods\_\_key*

### x*sage_changelog_payment_methods\_\_key*

### Returns all Contact Payments

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Contact Payments`

#### Input Parameters

- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `bank_account_id` - _optional_ - Use this to filter by bank account id<br/>
- `transaction_type_id` - _optional_ - Use this to filter by transaction type id<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Artefact Payments changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Artefact Payments deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `from_date` - _optional_ - Use this to filter by Artefact Payments dates<br/>
- `to_date` - _optional_ - Use this to filter by Artefact Payments dates<br/>
- `items_per_page` - _optional_ - Returns the given number of Artefact Payments per request.<br/>
- `page` - _optional_ - Go to specific page of Artefact Payments<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Artefact Payments (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_contact_payments

### x_sage_changelog_contact_payments

### Creates a Contact Payment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Restricted Access, Full Access<br/>

_Tags:_ `Contact Payments`

### Returns a Contact Payment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Contact Payments`

#### Input Parameters

- `key` - _required_ - The Contact Payment Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Artefact Payment (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_contact_payments\_\_key*

### x*sage_changelog_contact_payments\_\_key*

### Updates a Contact Payment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Restricted Access, Full Access<br/>

_Tags:_ `Contact Payments`

#### Input Parameters

- `key` - _required_ - The Contact Payment Key.<br/>

### Deletes a Contact Payment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Contact Payments`

#### Input Parameters

- `key` - _required_ - The Contact Payment Key.<br/>

### Returns all Other Payments

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Other Payments`

#### Input Parameters

- `bank_account_id` - _optional_ - Use this to filter by bank account id<br/>
- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Payments deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `from_date` - _optional_ - Use this to filter by Payments dates<br/>
- `has_attachments` - _optional_ - Use this to filter Payments by whether they have attachments or not<br/>
- `to_date` - _optional_ - Use this to filter by Payments dates<br/>
- `transaction_type_id` - _optional_ - Use this to filter by transaction type id<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Payments changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Payments per request.<br/>
- `page` - _optional_ - Go to specific page of Payments<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Payments (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `sort` - _optional_ - Order by a given attribute (required) and direction (optional; `asc` or `desc`; defaults to `asc`).<br/>
  Available attributes are:<br/>
  created_at, updated_at, date<br/>
  <br/>
  Example: `sort=created_at` or `sort=created_at:desc`<br/>

### x_sage_pathtitle_other_payments

### x_sage_changelog_other_payments

### Creates a Other Payment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Restricted Access, Full Access<br/>

_Tags:_ `Other Payments`

### Returns a Other Payment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Other Payments`

#### Input Parameters

- `key` - _required_ - The Other Payment Key.<br/>
- `nested_attributes` - _optional_ - Specify the attributes that you want to expose for nested entities of the Payment (expose all nested attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Payment (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_other_payments\_\_key*

### x*sage_changelog_other_payments\_\_key*

### Updates a Other Payment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Restricted Access, Full Access<br/>

_Tags:_ `Other Payments`

#### Input Parameters

- `key` - _required_ - The Other Payment Key.<br/>

### Deletes a Other Payment

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Bank`: Full Access<br/>

_Tags:_ `Other Payments`

#### Input Parameters

- `key` - _required_ - The Other Payment Key.<br/>

### Returns all Unallocated Artefacts

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Unallocated Artefacts`

#### Input Parameters

- `contact_id` - _optional_ - Use this to filter by contact id<br/>
- `search` - _optional_ - Use this to filter by the contact identifier.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Base Artefacts (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>
- `items_per_page` - _optional_ - Returns the given number of Base Artefacts per request.<br/>
- `page` - _optional_ - Go to specific page of Base Artefacts<br/>

### x_sage_pathtitle_unallocated_artefacts

### x_sage_changelog_unallocated_artefacts

### Returns a Unallocated Artefact

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Unallocated Artefacts`

#### Input Parameters

- `key` - _required_ - The Unallocated Artefact Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Base Artefact (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_unallocated_artefacts\_\_key*

### x*sage_changelog_unallocated_artefacts\_\_key*

### Returns all Catalog Item Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Catalog Item Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Catalog Item Types per request.<br/>
- `page` - _optional_ - Go to specific page of Catalog Item Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Catalog Item Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_catalog_item_types

### x_sage_changelog_catalog_item_types

### Returns a Catalog Item Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Catalog Item Types`

#### Input Parameters

- `key` - _required_ - The Catalog Item Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Catalog Item Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_catalog_item_types\_\_key*

### x*sage_changelog_catalog_item_types\_\_key*

### Returns all Product Sales Price Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Product Sales Price Types`

#### Input Parameters

- `active` - _optional_ - Use this to only return active or inactive items<br/>
- `items_per_page` - _optional_ - Returns the given number of Product Prices per request.<br/>
- `page` - _optional_ - Go to specific page of Product Prices<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Product Prices (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_product_sales_price_types

### x_sage_changelog_product_sales_price_types

### Creates a Product Sales Price Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Product Sales Price Types`

### Returns a Product Sales Price Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Product Sales Price Types`

#### Input Parameters

- `key` - _required_ - The Product Sales Price Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Product Price (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_product_sales_price_types\_\_key*

### x*sage_changelog_product_sales_price_types\_\_key*

### Updates a Product Sales Price Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Product Sales Price Types`

#### Input Parameters

- `key` - _required_ - The Product Sales Price Type Key.<br/>

### Deletes a Product Sales Price Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Product Sales Price Types`

#### Input Parameters

- `key` - _required_ - The Product Sales Price Type Key.<br/>

### Returns all Products

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Products`

#### Input Parameters

- `search` - _optional_ - Use this to filter by the item code or description.<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Products changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Products deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `active` - _optional_ - Use this to only return active or inactive items<br/>
- `items_per_page` - _optional_ - Returns the given number of Products per request.<br/>
- `page` - _optional_ - Go to specific page of Products<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Products (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_products

### x_sage_changelog_products

### Creates a Product

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Products`

### Returns a Product

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Products`

#### Input Parameters

- `key` - _required_ - The Product Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Product (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_products\_\_key*

### x*sage_changelog_products\_\_key*

### Updates a Product

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Products`

#### Input Parameters

- `key` - _required_ - The Product Key.<br/>

### Deletes a Product

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Products`

#### Input Parameters

- `key` - _required_ - The Product Key.<br/>

### Returns all Services

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Services`

#### Input Parameters

- `search` - _optional_ - Use this to filter by the item code or description.<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Services changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Services deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `active` - _optional_ - Use this to only return active or inactive items<br/>
- `items_per_page` - _optional_ - Returns the given number of Services per request.<br/>
- `page` - _optional_ - Go to specific page of Services<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Services (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_services

### x_sage_changelog_services

### Creates a Service

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Services`

### Returns a Service

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Services`

#### Input Parameters

- `key` - _required_ - The Service Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Service (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_services\_\_key*

### x*sage_changelog_services\_\_key*

### Updates a Service

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Services`

#### Input Parameters

- `key` - _required_ - The Service Key.<br/>

### Deletes a Service

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Services`

#### Input Parameters

- `key` - _required_ - The Service Key.<br/>

### Returns all Service Rate Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Service Rate Types`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Service Rates changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `active` - _optional_ - Use this to only return active or inactive items<br/>
- `items_per_page` - _optional_ - Returns the given number of Service Rates per request.<br/>
- `page` - _optional_ - Go to specific page of Service Rates<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Service Rates (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_service_rate_types

### x_sage_changelog_service_rate_types

### Creates a Service Rate Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Service Rate Types`

### Returns a Service Rate Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Service Rate Types`

#### Input Parameters

- `key` - _required_ - The Service Rate Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Service Rate (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_service_rate_types\_\_key*

### x*sage_changelog_service_rate_types\_\_key*

### Updates a Service Rate Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Service Rate Types`

#### Input Parameters

- `key` - _required_ - The Service Rate Type Key.<br/>

### Deletes a Service Rate Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Service Rate Types`

#### Input Parameters

- `key` - _required_ - The Service Rate Type Key.<br/>

### Returns all Stock Items

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Stock Items`

#### Input Parameters

- `search` - _optional_ - Use this to filter by the item code or description.<br/>
- `updated_or_created_since` - _optional_ - Use this to limit the response to Stock Items changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `deleted_since` - _optional_ - Use this to limit the response to Stock Items deleted since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Not inclusive of the passed timestamp.<br/>
- `active` - _optional_ - Use this to only return active or inactive items<br/>
- `out_of_stock` - _optional_ - Use this to filter by the Stock Items that are out of stock<br/>
- `below_reorder_level` - _optional_ - Use this to filter by the Stock Items that are below the reorder level<br/>
- `items_per_page` - _optional_ - Returns the given number of Stock Items per request.<br/>
- `page` - _optional_ - Go to specific page of Stock Items<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Stock Items (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_stock_items

### x_sage_changelog_stock_items

### Creates a Stock Item

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Stock Items`

### Returns a Stock Item

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Stock Items`

#### Input Parameters

- `key` - _required_ - The Stock Item Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Stock Item (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_stock_items\_\_key*

### x*sage_changelog_stock_items\_\_key*

### Updates a Stock Item

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Stock Items`

#### Input Parameters

- `key` - _required_ - The Stock Item Key.<br/>

### Deletes a Stock Item

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Stock Items`

#### Input Parameters

- `key` - _required_ - The Stock Item Key.<br/>

### Returns all Stock Movements

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Stock Movements`

#### Input Parameters

- `search` - _optional_ - Use this to filter by the details<br/>
- `stock_item_id` - _optional_ - Use this to filter by stock_item_id<br/>
- `from_date` - _optional_ - Use this to filter by Stock Movements dates<br/>
- `to_date` - _optional_ - Use this to filter by Stock Movements dates<br/>
- `items_per_page` - _optional_ - Returns the given number of Stock Movements per request.<br/>
- `page` - _optional_ - Go to specific page of Stock Movements<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Stock Movements (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_stock_movements

### x_sage_changelog_stock_movements

### Creates a Stock Movement

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Restricted Access, Full Access<br/>

_Tags:_ `Stock Movements`

### Returns a Stock Movement

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Sales`: Read Only, Restricted Access, Full Access<br/>
> * Area: `Purchases`: Read Only, Restricted Access, Full Access<br/>

_Tags:_ `Stock Movements`

#### Input Parameters

- `key` - _required_ - The Stock Movement Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Stock Movement (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_stock_movements\_\_key*

### x*sage_changelog_stock_movements\_\_key*

### Updates a Stock Movement

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Stock Movements`

#### Input Parameters

- `key` - _required_ - The Stock Movement Key.<br/>

### Deletes a Stock Movement

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Products & Services`: Full Access<br/>

_Tags:_ `Stock Movements`

#### Input Parameters

- `key` - _required_ - The Stock Movement Key.<br/>

### Returns all Business Activity Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start:<br/>

_Tags:_ `Business Activity Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Business Classifications per request.<br/>
- `page` - _optional_ - Go to specific page of Business Classifications<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Business Classifications (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_business_activity_types

### x_sage_changelog_business_activity_types

### Returns a Business Activity Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start:<br/>

_Tags:_ `Business Activity Types`

#### Input Parameters

- `key` - _required_ - The Business Activity Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Business Classification (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_business_activity_types\_\_key*

### x*sage_changelog_business_activity_types\_\_key*

### Returns all Business Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access, Read Only<br/>

_Tags:_ `Business Settings`

### x_sage_pathtitle_business_settings

### x_sage_changelog_business_settings

### Updates a Business Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access<br/>

_Tags:_ `Business Settings`

### Returns all Business Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Business Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of For Business Types per request.<br/>
- `page` - _optional_ - Go to specific page of For Business Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the For Business Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_business_types

### x_sage_changelog_business_types

### Returns a Business Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Business Types`

#### Input Parameters

- `key` - _required_ - The Business Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the For Business Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_business_types\_\_key*

### x*sage_changelog_business_types\_\_key*

### Returns all Datev Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access, Read Only<br/>

_Tags:_ `Datev Settings`

### x_sage_pathtitle_datev_settings

### x_sage_changelog_datev_settings

### Updates a Datev Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access<br/>

_Tags:_ `Datev Settings`

### Returns all Financial Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Financial Settings`

### x_sage_pathtitle_financial_settings

### x_sage_changelog_financial_settings

### Updates a Financial Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Financial Settings`

### Returns all Invoice Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Invoice Settings`

### x_sage_pathtitle_invoice_settings

### x_sage_changelog_invoice_settings

### Updates a Invoice Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Invoice Settings`

### Returns all Legal Form Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start:<br/>

_Tags:_ `Legal Form Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Business Classifications per request.<br/>
- `page` - _optional_ - Go to specific page of Business Classifications<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Business Classifications (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_legal_form_types

### x_sage_changelog_legal_form_types

### Returns a Legal Form Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start:<br/>

_Tags:_ `Legal Form Types`

#### Input Parameters

- `key` - _required_ - The Legal Form Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Business Classification (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_legal_form_types\_\_key*

### x*sage_changelog_legal_form_types\_\_key*

### Returns all Country Of Registrations

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Country Of Registrations`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Registered Countries per request.<br/>
- `page` - _optional_ - Go to specific page of Registered Countries<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Registered Countries (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_countries_of_registration

### x_sage_changelog_countries_of_registration

### Returns a Country Of Registration

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Country Of Registrations`

#### Input Parameters

- `key` - _required_ - The Country Of Registration Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Registered Country (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_countries_of_registration\_\_key*

### x*sage_changelog_countries_of_registration\_\_key*

### Returns all Tax Offices

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start:<br/>

_Tags:_ `Tax Offices`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Tax Offices per request.<br/>
- `page` - _optional_ - Go to specific page of Tax Offices<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Offices (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_tax_offices

### x_sage_changelog_tax_offices

### Returns a Tax Office

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start:<br/>

_Tags:_ `Tax Offices`

#### Input Parameters

- `key` - _required_ - The Tax Office Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Office (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_tax_offices\_\_key*

### x*sage_changelog_tax_offices\_\_key*

### Returns all Tax Profiles

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , , , , , , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Tax Profiles`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Tax Profiles changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `items_per_page` - _optional_ - Returns the given number of Tax Profiles per request.<br/>
- `page` - _optional_ - Go to specific page of Tax Profiles<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Profiles (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_tax_profiles

### x_sage_changelog_tax_profiles

### Returns a Tax Profile

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , , , , , , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Tax Profiles`

#### Input Parameters

- `key` - _required_ - The Tax Profile Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Profile (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_tax_profiles\_\_key*

### x*sage_changelog_tax_profiles\_\_key*

### Updates a Tax Profile

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: <br/>
> * Accounting Standard: <br/>
> * Accounting Start: <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Tax Profiles`

#### Input Parameters

- `key` - _required_ - The Tax Profile Key.<br/>

### Returns all Tax Rates

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Purchases`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Bank`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Tax Rates`

#### Input Parameters

- `updated_or_created_since` - _optional_ - Use this to limit the response to Tax Rates changed since a given date (format: YYYY-MM-DDT(+|-)hh:mm) or date-time (format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm). Inclusive of the passed timestamp.<br/>
- `address_region_id` - _optional_ - Use this to filter by address region id<br/>
- `date` - _optional_ - Use this to return results on a specified date.<br/>
- `include_historical_data` - _optional_ - Use this to include historical data in the response<br/>
- `cis_only` - _optional_ - Use this to filter Tax Rates to CIS only records<br/>
- `items_per_page` - _optional_ - Returns the given number of Tax Rates per request.<br/>
- `page` - _optional_ - Go to specific page of Tax Rates<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Rates (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_tax_rates

### x_sage_changelog_tax_rates

### Creates a Tax Rate (US only)

> ### Access Control Restrictions<br/>
>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Tax Rates`

### Returns a Tax Rate

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Sales`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Purchases`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Bank`: Full Access, Restricted Access, Read Only<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Tax Rates`

#### Input Parameters

- `key` - _required_ - The Tax Rate Key.<br/>
- `date` - _optional_ - Use this to show the tax rate percentage on the given date<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Rate (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_tax_rates\_\_key*

### x*sage_changelog_tax_rates\_\_key*

### Updates a Tax Rate (US only)

> ### Access Control Restrictions<br/>
>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Tax Rates`

#### Input Parameters

- `key` - _required_ - The Tax Rate key.<br/>

### Deletes a Tax Rate (US only)

> ### Access Control Restrictions<br/>
>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Tax Rates`

#### Input Parameters

- `key` - _required_ - The Tax Rate key.<br/>

### Returns all Tax Return Frequencies

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Standard: , , , , , <br/>
> * Accounting Start: , , , , ,<br/>

_Tags:_ `Tax Return Frequencies`

#### Input Parameters

- `tax_type_id` - _optional_ - Use this to filter Tax Submission Frequency Types by tax_type_id (Canada only)<br/>
  Possible values: CA_GST_HST, CA_PST_BC, CA_PST_MB, CA_QST, CA_PST_SK.
- `items_per_page` - _optional_ - Returns the given number of Tax Submission Frequency Types per request.<br/>
- `page` - _optional_ - Go to specific page of Tax Submission Frequency Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Submission Frequency Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_tax_return_frequencies

### x_sage_changelog_tax_return_frequencies

### Returns a Tax Return Frequency

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , <br/>
> * Accounting Standard: , , , , , <br/>
> * Accounting Start: , , , , ,<br/>

_Tags:_ `Tax Return Frequencies`

#### Input Parameters

- `key` - _required_ - The Tax Return Frequency Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Submission Frequency Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_tax_return_frequencies\_\_key*

### x*sage_changelog_tax_return_frequencies\_\_key*

### Returns all Tax Schemes

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , <br/>
> * Accounting Standard: , , , , <br/>
> * Accounting Start: , , , ,<br/>

_Tags:_ `Tax Schemes`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Tax Schemes per request.<br/>
- `page` - _optional_ - Go to specific page of Tax Schemes<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Schemes (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_tax_schemes

### x_sage_changelog_tax_schemes

### Returns a Tax Scheme

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , <br/>
> * Accounting Standard: , , , , <br/>
> * Accounting Start: , , , ,<br/>

_Tags:_ `Tax Schemes`

#### Input Parameters

- `key` - _required_ - The Tax Scheme Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Scheme (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_tax_schemes\_\_key*

### x*sage_changelog_tax_schemes\_\_key*

### Returns all Tax Types

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Tax Types`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Tax Types per request.<br/>
- `page` - _optional_ - Go to specific page of Tax Types<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Types (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_tax_types

### x_sage_changelog_tax_types

### Returns a Tax Type

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , ,<br/>

_Tags:_ `Tax Types`

#### Input Parameters

- `key` - _required_ - The Tax Type Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Tax Type (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_tax_types\_\_key*

### x*sage_changelog_tax_types\_\_key*

### Returns all Migrations

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access, Read Only<br/>

_Tags:_ `Migrations`

### x_sage_pathtitle_migrations

### x_sage_changelog_migrations

### Updates a Migrations

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any mentioned role in one of the listed areas:<br/>
> * Area: `Settings`: Full Access<br/>

_Tags:_ `Migrations`

### Returns all Migration Tax Returns

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Statutory Reporting`: Full Access<br/>

_Tags:_ `Migration Tax Returns`

#### Input Parameters

- `items_per_page` - _optional_ - Returns the given number of Migration Tax Returns per request.<br/>
- `page` - _optional_ - Go to specific page of Migration Tax Returns<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Migration Tax Returns (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x_sage_pathtitle_migration_tax_returns

### x_sage_changelog_migration_tax_returns

### Creates a Migration Tax Return

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Statutory Reporting`: Full Access<br/>

_Tags:_ `Migration Tax Returns`

### Returns a Migration Tax Return

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Statutory Reporting`: Full Access<br/>

_Tags:_ `Migration Tax Returns`

#### Input Parameters

- `key` - _required_ - The Migration Tax Return Key.<br/>
- `attributes` - _optional_ - Specify the attributes that you want to expose for the Migration Tax Return (expose all attributes with 'all'). These are in addition to the base attributes (name, path)<br/>

### x*sage_pathtitle_migration_tax_returns\_\_key*

### x*sage_changelog_migration_tax_returns\_\_key*

### Returns all Email Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access, Read Only<br/>

_Tags:_ `Email Settings`

### x_sage_pathtitle_email_settings

### x_sage_changelog_email_settings

### Updates a Email Settings

> ### Endpoint Availability<br/>
>
> <br/>
> * Accounting Plus: , , , , , , <br/>
> * Accounting Standard: , <br/>
> * Accounting Start: , , , , , , <br/>
> <br/>
> ### Access Control Restrictions<br/>
> <br/>
> Requires the authenticated user to have any of the following roles in the area `Settings`: Full Access<br/>

_Tags:_ `Email Settings`

## License

: Sage-Accounting-Component<br/>
<br/>

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
