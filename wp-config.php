<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'clucky' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'TCJ56cse3{xPJ<[em2$,!U-=X/zK4|)O~E ^}io3rB#a(V,&6sID/rV[0*T1itDx' );
define( 'SECURE_AUTH_KEY',  'TOK#gza+7AF&7ggW2%=6(&T9wVow)TZ6ngx{Wb.wikN7n=hnrKV`oNL)aK42^Akq' );
define( 'LOGGED_IN_KEY',    ';ll]xb-AR*TJ-b?<~]4#]k {1]ty-l%:q(Pa[{|($vh52lsRP~p_{L@EC]n$X,uP' );
define( 'NONCE_KEY',        'Q$tm9Gq-#eSV@rCXoMj+BLEQ~0k>V=UCcknxB-B`(VM%5;R-pX1/7%/EW2|| r8i' );
define( 'AUTH_SALT',        'lQYl9E:2J0S1v#Ap1A[zJ#bJn?vv_A(#xozrJhZVwo<@rNw8C(/?4vL6_?mdd3o5' );
define( 'SECURE_AUTH_SALT', '-)Bh[>y./1r3fNNK6G;`|(0nNF0(Cxat*0lNOIz<b2Hf#d6`A>rcfE_ZB@kjHi=a' );
define( 'LOGGED_IN_SALT',   ']Jco/3v{D*KgI&;@pL=O3bRPg=Nn{(E:}GNhmkW=S<ZrY`g_0?}|-fd!rhRuC*&9' );
define( 'NONCE_SALT',       '*I]ZNJ/I[MN7mgM+UBU[!4k&6.J}5=YzD Zl xW|AKG2^jV4qKBsd)HNuV}6mCVn' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
