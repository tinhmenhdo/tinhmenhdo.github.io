import"./BScVxmeO.js";const o=document.getElementById("crawlForm"),t=document.getElementById("results");o.addEventListener("submit",async r=>{r.preventDefault();const s=document.getElementById("urlInput").value;t.innerHTML="Đang xử lý...";try{const n=await(await fetch("/api/crawl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:s})})).json();n?t.innerHTML=`
            <div class="bg-white p-4 rounded shadow">
              <p><strong>Tên:</strong> ${n.name||"Không có"}</p>
              <p><strong>Ngày sinh:</strong> ${n.birthDate||"Không có"}</p>
              <p><strong>Nơi sinh:</strong> ${n.birthPlace||"Không có"}</p>
              ${n.biography?`<p><strong>Tiểu sử:</strong> ${n.biography}</p>`:""}
            </div>
          `:t.innerHTML="Không tìm thấy dữ liệu Rating AA"}catch(e){t.innerHTML="Có lỗi xảy ra khi crawl dữ liệu",console.error(e)}});
