import styles from './GetStarted.module.scss';

export function GetStarted() {
  return (
    <article className={styles.GetStarted}>
      <h2 className={styles.GetStarted__title}>Typography</h2>
        
      <div className="cont">
        <div className="col100p col50s">
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
        </div>

        <div className="col100p col50s">
          Default font family: Segoe UI<br />
          Default font size: 14 px<br />
          Default color: <span className={styles.GetStarted__color}>#333</span>
        </div>
      </div>

      <h2 className={styles.GetStarted__title}>Normalize.css</h2>
      <p>normalize.css included.</p>

      <h2 className={styles.GetStarted__title}>Adaptive grid</h2>
      <p>
        Adaptive grid based on 20-column structure and written on flexbox.
      </p>

      <div className={`cont ${styles['GetStarted__grid-example']}`}>
        <div className="col5p"><span>5%</span></div>
        <div className="col95p"><span>95%</span></div>

        <div className="col10p"><span>10%</span></div>
        <div className="col90p"><span>90%</span></div>

        <div className="col15p"><span>15%</span></div>
        <div className="col85p"><span>85%</span></div>

        <div className="col16p"><span>16%</span></div>
        <div className="col83p"><span>83%</span></div>

        <div className="col20p"><span>20%</span></div>
        <div className="col80p"><span>80%</span></div>

        <div className="col25p"><span>25%</span></div>
        <div className="col75p"><span>75%</span></div>

        <div className="col30p"><span>30%</span></div>
        <div className="col70p"><span>70%</span></div>

        <div className="col33p"><span>33%</span></div>
        <div className="col66p"><span>66%</span></div>

        <div className="col35p"><span>35%</span></div>
        <div className="col65p"><span>65%</span></div>

        <div className="col40p"><span>40%</span></div>
        <div className="col60p"><span>60%</span></div>

        <div className="col45p"><span>45%</span></div>
        <div className="col55p"><span>55%</span></div>

        <div className="col50p"><span>50%</span></div>
        <div className="col50p"><span>50%</span></div>
      </div>

      <p></p>
      <p>
        For grid usage need to create element with class <var>cont</var> that would be parent for grid columns.
      </p>
      <p>
        Name of colunm class: <var>col</var> + width in % / 5 (or 16, 33, 66, 83) + letter of device (<var>p</var> - for phones, <var>t</var> - for tablets, <var>s</var> - for desktops).<br />Sample: <var>col20t</var>, <var>col33s</var> or <var>col100p</var>.
      </p>

      <p>Code example:</p>
      <pre>
        <code className={styles.GetStarted__code}>
          &lt;div class="cont guide__grid-example"&gt;<br />
          &lt;div class="col5p"&gt;&lt;span&gt;5%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col95p"&gt;&lt;span&gt;95%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col10p"&gt;&lt;span&gt;10%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col90p"&gt;&lt;span&gt;90%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col15p"&gt;&lt;span&gt;15%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col85p"&gt;&lt;span&gt;85%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col16p"&gt;&lt;span&gt;16%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col83p"&gt;&lt;span&gt;83%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col20p"&gt;&lt;span&gt;20%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col80p"&gt;&lt;span&gt;80%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col25p"&gt;&lt;span&gt;25%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col75p"&gt;&lt;span&gt;75%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col30p"&gt;&lt;span&gt;30%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col70p"&gt;&lt;span&gt;70%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col33p"&gt;&lt;span&gt;33%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col66p"&gt;&lt;span&gt;66%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col35p"&gt;&lt;span&gt;35%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col65p"&gt;&lt;span&gt;65%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col40p"&gt;&lt;span&gt;40%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col60p"&gt;&lt;span&gt;60%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col45p"&gt;&lt;span&gt;45%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col55p"&gt;&lt;span&gt;55%&lt;/span&gt;&lt;/div&gt;<br />
          <br />
          &lt;div class="col50p"&gt;&lt;span&gt;50%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;div class="col50p"&gt;&lt;span&gt;50%&lt;/span&gt;&lt;/div&gt;<br />
          &lt;/div&gt;
        </code>
      </pre>
    </article>
  );
}